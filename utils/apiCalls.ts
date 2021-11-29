import axios from "axios"
import { du_users } from "../prisma/generated/linkClient"
import { LobbyConfiguration } from "../types/lobby"
import { ApiResponse, ApiRoutes } from "../types/response"

const apiUrl : string = 'https://api.nade404.com/api/'
const apiOptions : ApiRoutes = {
    players : 'players/',
    top10kd : 'top10kd/',
    top10hs : 'top10hs/'
}

export async function getStatsBySteamId(steamId : string) : Promise<ApiResponse> {
    return axios.get<ApiResponse>(`${apiUrl}${apiOptions.players}${steamId}`).then(res => res.data)
    .catch(error => error)
}

export async function getTop10Hs() : Promise<ApiResponse> {
    return axios.get<ApiResponse>(`${apiUrl}${apiOptions.top10hs}`).then(res => res.data)
    .catch(error => error)
}

export async function getTop10Kd() : Promise<ApiResponse> {
    return axios.get<ApiResponse>(`${apiUrl}${apiOptions.top10kd}`).then(res => res.data)
    .catch(error => error)
}

export async function createLobbyMatch(lobbyConfiguration : LobbyConfiguration, players : string[]) : Promise<any> {
    const half = Math.ceil(players.length / 2);
    const firstHalf = players.slice(0, half);
    const secondHalf = players.slice(-half);

    let payload = {
        "side_type": lobbyConfiguration.KnifeEnabled ? "always_knife" : "never_knife",
        "maplist": ["de_dust2"],
        "team1": {
            "players" : firstHalf,
        },
        "team2": {
            "players" : secondHalf,
        },
    }

    console.log("REQUEST PAYLOAD: ", payload);

    return axios.post('http://localhost:3000/api/get5config', payload).then(res => res.data)
    .catch(error => error);
}