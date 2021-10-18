export interface Player {
    id: number,
    steam_id: string,
    name: string,
    score: number,
    rank: number,
    mvp: number,
    kills: number,
    deaths: number,
    ratio: number,
    headshots: number,
    headshots_percent: number,
    assists: number,
    flash_assists: number,
    no_scope: number,
    thru_smoke: number,
    blind: number,
    wallbang: number
}

export interface Players {
    players: Player[]
}
