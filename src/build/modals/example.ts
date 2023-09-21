import {
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
  ModalBuilder,
  Guild,
} from "discord.js";

export function example(guild: Guild) {
  const textInput = new ActionRowBuilder<TextInputBuilder>().addComponents(
    new TextInputBuilder()
      .setLabel("example")
      .setPlaceholder("example2")
      .setMinLength(3)
      .setMaxLength(200)
      .setStyle(TextInputStyle.Paragraph)
      .setCustomId("example3")
      .setRequired(true)
  );

  const modal = new ModalBuilder()
    .setCustomId(`example`)
    .setTitle(`${guild.name} example`)
    .addComponents(textInput);

  return modal;
}
