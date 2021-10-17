import { SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "@discordjs/builders";
import { BaseCommandInteraction, Client } from "discord.js";

export interface CommandData {
    data: SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder
}

export interface CommandExec {
    execute (interaction: BaseCommandInteraction): void
}

export interface Command extends CommandData, CommandExec {}

export interface ClientWithCommands extends Client {
    commands?: Map<string, Command>
}