import axios from 'axios'
import { steamKey } from '../config.json'
import { SteamResponse } from '../types/response'
import SteamId from 'steamid'

export function formatSteamId(steamId : string | undefined) : string {
    if (typeof steamId === 'string')
        return steamId.startsWith("STEAM_0") ? steamId.replace("STEAM_0", "STEAM_1") : steamId
    else
        return ""
}

export async function getSteamInfos(steamId : string) : Promise<SteamResponse> {
    const requestUrl = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${steamKey}&format=json&steamids=${new SteamId(steamId).getSteamID64()}`
    return axios.get<SteamResponse>(requestUrl).then(res => res.data)
    .catch(error => error)
}