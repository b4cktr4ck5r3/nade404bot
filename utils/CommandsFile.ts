import { Command } from "../types/Client"
import * as fs from 'fs'

const commandsDir : string[] = fs.readdirSync('./commands') // fs is not relative, so ./ works

export async function getCommandsAsJSON() {
	const commandsAsJSON: ReturnType<Command["data"]["toJSON"]>[] = [];
	for (const dir of commandsDir) {
		const command : Command = await import(`../commands/${dir}/command`); // import is relative, so need ../
		commandsAsJSON.push(command.data.toJSON());
	}

	return commandsAsJSON;
}

export async function getCommandsAsMap() {
	const commandsAsMap: Map<string, Command> = new Map<string, Command>();
	for (const dir of commandsDir) {
		const command = await import(`../commands/${dir}/command`) // import is relative, so need ../
		commandsAsMap.set(command.data?.name, command);
	}

	return commandsAsMap;
}