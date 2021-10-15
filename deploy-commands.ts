import { getCommandsAsJSON } from './utils/CommandsFile';
import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { clientId, guildId, token } from './config.json';
import * as fs from 'fs';

async function deployCommands() {
	const rest = new REST({ version: '9' }).setToken(token);

	console.log('Started refreshing application (/) commands.');

	rest.put(
		Routes.applicationGuildCommands(clientId, guildId), {
			body: await getCommandsAsJSON()
		})
		.then(() => console.log("Successfully reloaded application (/) commands."))
		.catch(console.error);
}

deployCommands();