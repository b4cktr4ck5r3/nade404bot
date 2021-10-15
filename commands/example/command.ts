import { SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

const data : SlashCommandSubcommandsOnlyBuilder = new SlashCommandBuilder()
    .setName("exampecommand")
    .setDescription("Description")

const execute = async (interaction : CommandInteraction) => await interaction.reply("example command response")

export { data, execute }