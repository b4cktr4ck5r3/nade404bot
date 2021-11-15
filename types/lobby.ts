export enum REGISTRATION_STEP {
    CANCELED = -1,
    PRIVACY = 0,
    KNIFE = 1,
    MR = 2,
    OVERTIME = 3,
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