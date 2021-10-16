import axios from "axios"
import { ApiResponse } from "../types/response"

const apiUrl = 'https://api.nade404.com/api/'
const apiOptions = {
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