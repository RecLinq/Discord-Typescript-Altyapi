import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, "..", "..", ".env") });

import { REST, Routes, APIUser } from "discord.js";
import { vars } from "../keys";
import commands from "../commands";

const body = commands
  .map(({ commands }) => commands.map(({ meta }) => meta))
  .flat();

const rest = new REST({ version: "10" }).setToken(vars.clientToken);

async function main() {
  const currentUser = (await rest.get(Routes.user())) as APIUser;
  const endpoint = Routes.applicationGuildCommands(
    currentUser.id,
    vars.guildID
  );

  await rest.put(endpoint, { body });

  return currentUser;
}

main()
  .then((user) => {
    const tag = user.username;
    const response = `Başarıyla komutları ${vars.guildID} ID'li sunucuda ${tag} adlı bota yükledim!`;

    console.log(response);
  })
  .catch(console.error);
