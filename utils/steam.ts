export function FormatSteamId(steamId : string) : void {
    if (steamId.startsWith("STEAM_0")) steamId = steamId.replace("STEAM_0", "STEAM_1")
}