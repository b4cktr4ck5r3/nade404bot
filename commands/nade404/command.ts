import { SlashCommandBuilder, SlashCommandStringOption, SlashCommandSubcommandsOnlyBuilder } from "@discordjs/builders";
import { CommandInteraction, Options } from "discord.js";
import { nade404handler } from "./handler";

const data : SlashCommandSubcommandsOnlyBuilder = new SlashCommandBuilder()
    .setName("nade404")
    .setDescription("Ask for Nade404 stats")
    .addSubcommand(subCommand =>
        subCommand.setName("me")
                .setDescription("Retrieve stats about you if you're registerd"))
    .addSubcommand(subCommand =>
        subCommand.setName("register")
                .setDescription("Register steam_id to disord account")
                .addStringOption((options: SlashCommandStringOption) =>
                options.setName("steamid")
                .setDescription("You're steamid")
                .setRequired(true)))
    .addSubcommand(subCommand => 
        subCommand.setName("top10kd")
                    .setDescription("Retrieve top 10 players based on kd value"))
    .addSubcommand(subCommand =>
        subCommand.setName("top10hs")
                    .setDescription("Retrieve top 10 players based on headshot percent"))
    .addSubcommandGroup(subcommandGroup =>
        subcommandGroup.setName("stats").setDescription("Retrieve stats")
        .addSubcommand(subCommand => 
            subCommand.setName("steam")
                        .setDescription("Retrieve stats for steam_id")
                        .addStringOption((options : SlashCommandStringOption) =>
                            options.setName("steamid")
                            .setDescription("Player's SteamID")
                            .setRequired(true))
        )
        .addSubcommand(subCommand => 
            subCommand.setName("discord")
                        .setDescription("Retrieve stats for discord user")
                        .addStringOption((options : SlashCommandStringOption) =>
                            options.setName("discord")
                            .setDescription("Player's Discord")
                            .setRequired(true))
        )
    )

const execute = async (interaction : CommandInteraction) => nade404handler(interaction)

export { data, execute }