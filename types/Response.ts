import { Player, Players } from './player'

export interface ApiResponse {
    message: string,
    players: Player | Players,
    success: boolean
}

export interface ApiRoutes {
    players : string
    top10kd : string
    top10hs : string
}