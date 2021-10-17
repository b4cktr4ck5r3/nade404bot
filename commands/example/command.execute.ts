import { SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export const execute = async (interaction : CommandInteraction) => await interaction.reply("example command response")