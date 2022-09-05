import React from 'react';
import { UserType } from '../types/types';

type UserItemPropsType = {
    user: UserType
}

export const UserItem: React.FC<UserItemPropsType> = ({ user }) => {
    return (
        <div style={{border: '1px solid #131313'}}>
            {user.id}. {user.name} проживает в городе {user.address.city}
        </div>
    )
}
