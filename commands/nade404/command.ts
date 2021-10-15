import { SlashCommandBuilder, SlashCommandStringOption, SlashCommandSubcommandsOnlyBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { nade404handler } from "./handler";

const data : SlashCommandSubcommandsOnlyBuilder = new SlashCommandBuilder()
    .setName("nade404")
    .setDescription("Ask for Nade404 stats")
    .addSubcommand(subcommandGroup => 
        subcommandGroup.setName("stats")
                    .setDescription("Retrieve stats for steam_id")
                    .addStringOption((options : SlashCommandStringOption) =>
                        options.setName("steamid")
                        .setDescription("Player's SteamID")
                        .setRequired(true))
    )
    .addSubcommand(subCommandGroup => 
        subCommandGroup.setName("top10kd")
                    .setDescription("Retrieve top 10 players based on kd value")
    )
    .addSubcommand(subCommandGroup =>
        subCommandGroup.setName("top10hs")
                    .setDescription("Retrieve top 10 players based on headshot percent")
    )

const execute = async (interaction : CommandInteraction) => nade404handler(interaction)

export { data, execute }