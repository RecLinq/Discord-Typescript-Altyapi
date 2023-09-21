import {
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} from "discord.js";

export function example() {
  return new StringSelectMenuBuilder()
    .setCustomId("example")
    .setMaxValues(1)
    .setPlaceholder("example")
    .setOptions(
      new StringSelectMenuOptionBuilder()
        .setLabel("example2")
        .setValue("example2"),
      new StringSelectMenuOptionBuilder()
        .setLabel("example3")
        .setValue("example3"),
      new StringSelectMenuOptionBuilder()
        .setLabel("example4")
        .setValue("example4"),
      new StringSelectMenuOptionBuilder()
        .setLabel("example5")
        .setValue("example5")
    );
}
