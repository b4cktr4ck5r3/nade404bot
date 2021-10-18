import { ApiResponse } from "./response";

export enum Top10Type {
    HS,
    KD
}

export interface Top10 {
    type: Top10Type
    request : any // TODO : replace any
}