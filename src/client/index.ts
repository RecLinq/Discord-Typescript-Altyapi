import { ActivityType, Client, GatewayIntentBits } from "discord.js";
import { registerEvents } from "../utils";
import { vars } from "../keys";
import events from "../events/client";

console.clear()

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildIntegrations],
  presence: {
    status: "dnd",
    activities: [
      {
        name: "discord-typescript-altyapi",
        type: ActivityType.Playing,
        state: "https://github.com/RecLinq/Discord-Typescript-Altyapi",
      },
    ],
  },
});

registerEvents(client, events);

client.login(vars.clientToken).catch((err) => {
  console.error("[LOGIN ERR]", err);
  process.exit(1);
});
