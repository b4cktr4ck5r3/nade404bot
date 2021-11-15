import axios from 'axios'
import { steamKey } from '../config.json'
import { SteamResolveVanityResponse, SteamSummaryResponse } from '../types/response'
import SteamId from 'steamid'

export function formatSteamId(steamId : string | undefined) : string {
    if (typeof steamId === 'string')
        return steamId.startsWith("STEAM_0") ? steamId.replace("STEAM_0", "STEAM_1") : steamId
    else
        return ""
}

export async function getSteamIdFromUrl(steamUrl : string) : Promise<string> {
    const reCustomId = new RegExp('https?:\/\/steamcommunity.com/id/')
    const reProfile =  new RegExp('https?:\/\/steamcommunity.com/profiles/')

    if (reCustomId.test(steamUrl)) {
        const customId = steamUrl.replace(reCustomId, '').replace('/', '');
        const requestUrl = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${steamKey}&vanityurl=${customId}`
        const steamId = await axios.get<SteamResolveVanityResponse>(requestUrl).then(res => res.data.response.steamid);
        return new SteamId(steamId).getSteam2RenderedID();
    } else if (reProfile.test(steamUrl)) {
        const steamId = steamUrl.replace(reProfile, '').replace('/', '');
        return new SteamId(steamId).getSteam2RenderedID();
    } else {
        return '';
    }
}

export async function getResolvedSteamId(input : string) : Promise<string> {
    if (input.startsWith('http://') || input.startsWith('https://'))
        input = await getSteamIdFromUrl(input);
    else if (/^\d+$/.test(input)) {
        const steamId = new SteamId(input);
        if (steamId.isValid())
            input = steamId.getSteam2RenderedID();
    }
    
    return formatSteamId(input);
}

export async function getSteamInfos(steamId : string) : Promise<SteamSummaryResponse> {
    const requestUrl = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${steamKey}&format=json&steamids=${new SteamId(steamId).getSteamID64()}`
    return axios.get<SteamSummaryResponse>(requestUrl).then(res => res.data)
    .catch(error => error)
}