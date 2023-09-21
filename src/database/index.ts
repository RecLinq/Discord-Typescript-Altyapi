import { connect, connection } from "mongoose";
import { readdirSync } from "fs";
import { resolve } from "path";

export async function mongoConnect() {
  await connect("mongodb://127.0.0.1:27017/typescript-altyapi").catch(err => {
    console.error("[DATABASE ERROR]\n" + err);
  });
}
export async function mongoEvents() {
  readdirSync(resolve(__dirname, "..", "events/data/")).forEach(
    async file => {
      const reqEvent = async () =>
        await import(
          `${resolve(__dirname, "..", "events/data/")}/${file}`
        ).then(m => m.default);
      const events = await reqEvent();
      connection.on(events.name, (...args) => events.execute(...args));
    }
  );
}
