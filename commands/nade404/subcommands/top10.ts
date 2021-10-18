import { CommandInteraction } from "discord.js";
import { Players } from "../../../types/player";
import { ApiResponse } from "../../../types/response";
import { Top10, Top10Type } from "../../../types/top10";
import { getErrorTemplate } from "../../../utils/template";
import { getTop10Template } from "../template";

export async function top10(interaction: CommandInteraction, top10 : Top10) {
    const { success, players } : ApiResponse = await top10.request();
    if (success) interaction.reply({ embeds: [getTop10Template(players as Players, top10.type)] });
    else interaction.reply({ embeds: [getErrorTemplate(`Error on getting top 10 ${top10.type === Top10Type.HS ? "hs" : "k/d"}`, `Cannot get top 10 ${top10.type === Top10Type.HS ? "hs" : "k/d"}`)] })
} 