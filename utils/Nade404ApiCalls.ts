import axios from "axios"
import { ApiResponse } from "../types/Response"

const apiUrl = 'https://api.nade404.com/api/'
const apiOptions = {
    players : 'players/',
    top10kd : 'top10kd/',
    top10hs : 'top10hs/'
}

export async function getStatsBySteamId(steamId : string) : Promise<ApiResponse> {
    return axios.get<ApiResponse>(`${apiUrl}${apiOptions.players}${steamId}`).then(res => res.data)
}