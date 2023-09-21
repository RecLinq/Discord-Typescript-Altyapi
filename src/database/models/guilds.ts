import { Schema, model } from "mongoose";

export const guilds = model(
  "guilds",
  new Schema({
    guildId: { type: Schema.Types.String, unique: true },
  })
);
