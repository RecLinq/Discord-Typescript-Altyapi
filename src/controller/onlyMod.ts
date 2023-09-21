import {
  ChatInputCommandInteraction,
  GuildMemberRoleManager,
} from "discord.js";
import { vars } from "../keys";
import * as Embeds from "../build/embeds";

export const onlyModControl = async (
  interaction: ChatInputCommandInteraction
) => {
  let control;
  if (!interaction.member) return (control = false);
  if (interaction.guild) {
    const controlRole = interaction.guild.roles.cache.find(
      (r) => r.id === vars.modRole
    );

    if (!controlRole) return (control = false);

    if (
      controlRole?.position >
      (interaction.member.roles as GuildMemberRoleManager).highest.position
    ) {
      if (interaction.deferred) {
        await interaction.editReply({
          embeds: [
            Embeds.errorEmbed(
              interaction.guild,
              "Üzgünüm, bu komutu sadece __Moderator__ kullanabilir!"
            ),
          ],
        });
      } else
        await interaction.reply({
          ephemeral: true,
          embeds: [
            Embeds.errorEmbed(
              interaction.guild,
              "Üzgünüm, bu komutu sadece __Moderator__ kullanabilir!"
            ),
          ],
        });

      return (control = false);
    } else return (control = true);
  } else return (control = false);
};
