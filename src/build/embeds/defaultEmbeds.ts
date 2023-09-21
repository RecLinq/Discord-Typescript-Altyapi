import { EmbedBuilder } from "discord.js";
import { Guild } from "discord.js";
import { colors } from "../../keys";

export function errorEmbed(guild: Guild, error: string) {
  return new EmbedBuilder()
    .setColor(colors.error)
    .setAuthor({
      name: "❌ HATA!",
      iconURL: guild.iconURL() ?? undefined,
    })
    .setDescription(
      `${error}\n*Detaylı bilgi için [iletişime geçin!](https://discord.com/users/228498117056659466)*`
    );
}

export function successEmbed(guild: Guild, description: string) {
  return new EmbedBuilder()
    .setColor(colors.success)
    .setAuthor({
      name: "👍 BAŞARILI",
      iconURL: guild.iconURL() ?? undefined,
    })
    .setDescription(description);
}
