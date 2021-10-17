import { Command, CommandData, CommandExec } from "../types/client"
import * as fs from 'fs'

const commandsDir : string[] = fs.readdirSync('./commands') // fs is not relative, so ./ works

export async function getCommandsAsJSON() {
	const commandsAsJSON: ReturnType<Command["data"]["toJSON"]>[] = [];
	for (const dir of commandsDir) {
		const commandData : CommandData = await import(`../commands/${dir}/command.data`); // import is relative, so need ../
		commandsAsJSON.push(commandData.data.toJSON());
	}

	return commandsAsJSON;
}

export async function getCommandsAsMap() {
	const commandsAsMap: Map<string, Command> = new Map<string, Command>();
	for (const dir of commandsDir) {
		const commandData : CommandData = await import(`../commands/${dir}/command.data`) // import is relative, so need ../
		const commandExec : CommandExec = await import(`../commands/${dir}/command.execute`) // import is relative, so need ../
		commandsAsMap.set(commandData.data?.name, {...commandData, ...commandExec});
	}

	return commandsAsMap;
}