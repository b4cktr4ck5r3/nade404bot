export function FormatSteamId(steamId : string) {
    if (steamId.startsWith("STEAM_0")) steamId = steamId.replace("STEAM_0", "STEAM_1")
}