import { Player } from './Player'

export interface ApiResponse {
    message: string,
    players: Player | Player[],
    success: boolean
}