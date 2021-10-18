export function FormatSteamId(steamId : string | undefined) : string {
    if (typeof steamId === 'string')
        return steamId.startsWith("STEAM_0") ? steamId.replace("STEAM_0", "STEAM_1") : steamId
    else
        return ""
}