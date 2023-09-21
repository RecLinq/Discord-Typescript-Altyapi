import { ColorResolvable } from "discord.js";

export interface Vars {
  clientToken: string;
  devId: string;
  guildID: string;

  // Roles
  modRole: string;
}

export interface Colors {
  main: ColorResolvable;
  error: ColorResolvable;
  success: ColorResolvable;
}

export interface Permissions {
  Admin: bigint | string;
  Mod: bigint | string;
}
