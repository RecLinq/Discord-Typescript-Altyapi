import {
  SlashCommandBuilder,
  ChannelType,
} from "discord.js";
import { command } from "../../utils";
import { permissions } from "../../keys";
const meta = new SlashCommandBuilder()
  .setName("example")
  .setDescription("example")
  .setDefaultMemberPermissions(permissions.Admin)
  .addChannelOption((option) =>
    option
      .setName("example1")
      .setDescription("example2")
      .addChannelTypes(ChannelType.GuildText)
      .setRequired(true)
  );

export default command(meta, async ({ interaction }) => {
  try {

  } catch (error) {
    console.log(`[Command Error]`, error);
  }
});
