import { SelectMenuConfiguration } from "../types/selectMenu"

export const PRIVACY_MENU : SelectMenuConfiguration = {
    placeholder: 'Please select game privacy',
    options: [
        {
            label: 'Public',
            description: 'Create a public game',
            value: 'public'
        },
        {
            label: 'Private',
            description: 'Create private game',
            value: 'private'
        }
    ]
}

export const KNIFE_MENU : SelectMenuConfiguration = {
    placeholder: 'Please select knife round enabled',
    options:[
        {
            label: 'Yes',
            description: 'Play knife round',
            value: 'knife_on'
        },
        {
            label: 'No',
            description: "Don't play knife round",
            value: 'knife_off'
        }
    ]
}

export const ROUNDS_MENU : SelectMenuConfiguration = {
    placeholder: 'Please select number of round',
    options:[
        {
            label: 'MR16',
            description: '16 rounds to win',
            value: 'mr16'
        },
        {
            label: 'MR8',
            description: '8 rounds to win',
            value: 'mr8'
        }
    ]
}

export const OVERTIME_MENU : SelectMenuConfiguration = {
    placeholder: 'Please select overtime enabled',
    options:[
        {
            label: 'Yes',
            description: 'Play overtime',
            value: 'overtime_yes'
        },
        {
            label: 'No',
            description: "Don't play overtime",
            value: 'overtime_no'
        }
    ]
}