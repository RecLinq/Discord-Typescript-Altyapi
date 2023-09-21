import commands from "../../commands";
import { Command } from "../../types";
import { event } from "../../utils";
import * as Embeds from "../../build/embeds";

const allCommands = commands.map(({ commands }) => commands).flat();
const allCommandsMap = new Map<string, Command>(
  allCommands.map((c) => [c.meta.name, c])
);

// Controllers
import * as example from "../../functions/example";

// ---- //
export default event(
  "interactionCreate",
  async ({ log, client }, interaction) => {
    if (!interaction.guild) return;

    if (interaction.isModalSubmit()) {
      example.example(interaction);
    }

    if (!interaction.isChatInputCommand()) return;
    try {
      const commandName = interaction.commandName;
      const command = allCommandsMap.get(commandName);

      if (!command) throw new Error("Komut bulunamadı..");

      await command.exec({
        client,
        interaction,
        log(...args) {
          log(`[${command.meta.name}]`, ...args);
        },
      });
    } catch (error) {
      log(`[Command Error]`, error);
      if (interaction.deferred) {
        return await interaction.editReply({
          embeds: [
            Embeds.errorEmbed(
              interaction.guild,
              "Üzgünüm, bir hata ile karşılaşıldı!"
            ),
          ],
        });
      }
      return interaction.reply({
        ephemeral: true,
        embeds: [
          Embeds.errorEmbed(
            interaction.guild,
            "Üzgünüm, bir hata ile karşılaşıldı!"
          ),
        ],
      });
    }
  }
);
