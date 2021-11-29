import { du_users } from ".prisma/client";
import { CommandInteraction } from "discord.js";
import { FindUser } from "../../../database/query";
import { prisma } from "../../../lib/prisma/prisma";
import { Player } from "../../../types/player";
import { ApiResponse } from "../../../types/response";
import { getStatsBySteamId } from "../../../utils/apiCalls";
import { formatSteamId } from "../../../utils/steam";
import { getErrorTemplate } from "../../../utils/template";
import { getStatsTemplate } from "../template";

export async function me(interaction: CommandInteraction){
    const discordId : string = interaction.user.id;
    const user = await prisma.du_users.findFirst({
        where: {
            userid: discordId,
        },
    })

    if (user) {
        let steamId : string | null = formatSteamId(user?.steamid);
        if (steamId) {
            const { success, players } : ApiResponse = await getStatsBySteamId(steamId);
            if (success) interaction.reply({ embeds: [await getStatsTemplate(players as Player)] })
            else interaction.reply({ embeds: [getErrorTemplate("Error on getting stats", "Cannot get stats")] })
        } else {
            interaction.reply({ embeds: [getErrorTemplate("Error on getting stats", "Cannot get stats")] })
        }
    } else {
        interaction.reply({ embeds: [getErrorTemplate("Error on getting stats", "Cannot get stats")] })
    }
}