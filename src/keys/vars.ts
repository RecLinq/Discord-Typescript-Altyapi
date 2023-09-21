import { Vars } from "../types";

export const vars: Vars = {
  clientToken: process.env.token ?? "nil",
  devId: process.env.devID ?? "nil",
  guildID: process.env.guildID ?? "nil",

  // Roles
  modRole: process.env.modRole ?? "nil",

};

if (Object.values(vars).includes("nil")) {
  throw new Error("Tüm ENV değişkenleri tanımlanamadı!");
}
