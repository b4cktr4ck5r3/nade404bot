export enum REGISTRATION_STEP {
    CANCELED = -1,
    PRIVACY = 0,
    KNIFE = 1,
    MR = 2,
    OVERTIME = 3,
    WAITING_FOR_PLAYERS = 4,
    LAUNCHING_GAME = 5,
    ENDED = 10,
}

export enum PRIVACY {
    PRIVATE = 'private',
    PUBLIC = 'public'
}

export enum MR_TYPE {
    MR16 = 'mr16',
    MR30 = 'mr30'
}

export type LobbyConfiguration = {
    Privacy : PRIVACY | null,
    KnifeEnabled : boolean | null,
    MRType : MR_TYPE | null,
    Overtime: boolean | null 
}

export interface LobbyMysqlData {
    ID : number,
    UserID : string,
    SteamID : string,
    Member: number,
    LastAccountUse : number
}

export type LobbyConfigurationBodyRequest = {

}