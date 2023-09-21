import { ChatInputCommandInteraction } from "discord.js";
import { vars } from "../keys";
import * as Embeds from "../build/embeds";

export const onlyDevControl = async (
  interaction: ChatInputCommandInteraction
) => {
  let control;
  if (interaction.guild) {
    if (interaction.user.id != vars.devId) {
      if (interaction.deferred) {
        await interaction.editReply({
          embeds: [
            Embeds.errorEmbed(
              interaction.guild,
              "Üzgünüm, bu komutu sadece __Developer__ kullanabilir!"
            ),
          ],
        });
      } else
        await interaction.reply({
          ephemeral: true,
          embeds: [
            Embeds.errorEmbed(
              interaction.guild,
              "Üzgünüm, bu komutu sadece __Developer__ kullanabilir!"
            ),
          ],
        });

      return (control = false);
    } else return (control = true);
  } else return (control = false);
};
