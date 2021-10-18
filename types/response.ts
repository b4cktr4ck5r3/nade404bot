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

export interface SteamResponse {
    response : {
        players : SteamPlayer[]

    }
}

export interface SteamPlayer {
    steamid: string,
    communityvisibilitystate: number,
    profilestate: number,
    personaname: string,
    profileurl: string,
    avatar: string,
    avatarmedium: string,
    avatarfull: string,
    avatarhash: string,
    lastlogoff: number,
    personastate: number,
    realname: string,
    primaryclanid: string,
    timecreated: number,
    personastateflags: number,
    loccountrycode: string,
    locstatecode: string,
}