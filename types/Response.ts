import { Player } from './player'

export interface ApiResponse {
    message: string,
    players: Player | Player[],
    success: boolean
}