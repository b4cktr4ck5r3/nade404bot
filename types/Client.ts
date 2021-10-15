import { SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "@discordjs/builders";
import { BaseCommandInteraction, Client } from "discord.js";

export interface Command {
    data: SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder
    execute (interaction: BaseCommandInteraction): void
}

export interface ClientWithCommands extends Client {
    commands?: Map<string, Command>
}