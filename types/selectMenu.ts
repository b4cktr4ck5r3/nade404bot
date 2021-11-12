export interface ActionRow {
    label: string,
    description: string,
    value: string
}

export interface SelectMenuConfiguration {
    placeholder: string,
    options: ActionRow[]
}