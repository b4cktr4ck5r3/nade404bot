import { Player, Players } from './player'

export interface ApiResponse {
    message: string,
    players: Player | Players,
    success: boolean
}