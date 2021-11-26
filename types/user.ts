export interface User {
    discordId : string,
    steamId : string
}

export interface UserMysqlData {
    ID : number,
    UserID : string,
    SteamId : string,
    Member: number,
    LastAccountUse: number
}