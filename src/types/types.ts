
export type AdressType = {
    street: string
    city: string
    zipcode: string
}

export type UserType = {
    id: number
    name: string
    email: string
    address: AdressType
}

export type TodoType = {
    id: number
    title: string
    completed: boolean
}