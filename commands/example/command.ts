import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName("examplecommand")
        .setDescription("Description"),
    execute: async (interaction : CommandInteraction) => { await interaction.reply("example command response") }
};