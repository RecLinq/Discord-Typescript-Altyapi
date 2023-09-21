import { PermissionsBitField } from "discord.js"
import { Permissions } from "../types"

export const permissions: Permissions = {
    Admin: PermissionsBitField.Flags.Administrator ?? 'nil',
    Mod: PermissionsBitField.Flags.ModerateMembers ?? 'nil',
}

if (Object.values(permissions).includes('nil')) throw new Error('Permissions değişenleri bulunmuyor!')