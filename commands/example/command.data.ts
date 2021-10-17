import { SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export const data : SlashCommandSubcommandsOnlyBuilder = new SlashCommandBuilder()
    .setName("exampecommand")
    .setDescription("Description")