export interface Player {
    id: number,
    steam_id: string,
    name: string,
    kills: number,
    deaths: number,
    ratio: number,
    headshots: number,
    headshots_percent: number,
    assists: number,
    flash_assists: number
}