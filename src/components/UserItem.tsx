import React from 'react';
import { UserType } from '../types/types';

type UserItemPropsType = {
    user: UserType
    callback: (user: UserType) => void
}

export const UserItem = ({ user, callback}: UserItemPropsType) => {
    return (
        <div onClick={() => callback(user)} style={{border: '1px solid #131313', cursor: 'pointer'}}>
            {user.id}. {user.name} проживает в городе {user.address.city}
        </div>
    )
}
