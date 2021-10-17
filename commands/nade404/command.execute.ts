import { SlashCommandBuilder, SlashCommandStringOption, SlashCommandSubcommandsOnlyBuilder } from "@discordjs/builders";
import { CommandInteraction, Options } from "discord.js";
import { nade404handler } from "./handler";

export const execute = async (interaction : CommandInteraction) => nade404handler(interaction)