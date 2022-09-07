import React from 'react'
import { UserType } from '../types/types'
import {UserItem} from './UserItem'

type UserListPropsType = {
    users: UserType[]
}

export const UserList: React.FC<UserListPropsType> = ({ users }) => {
    return (
        <div></div>
    )
}
