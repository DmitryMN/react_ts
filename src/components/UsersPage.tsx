import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserType } from '../types/types';
import List from './List'
import { UserItem } from './UserItem'

export const UsersPage: React.FC = () => {

    const [users, setUsers] = useState<UserType[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const res = axios.get<UserType[]>('https://jsonplaceholder.typicode.com/users');
            setUsers([...(await res).data])
        } catch (e) {
            alert(e)
        }
    }

    const callBack = (user: UserType) => {
        navigate(`/users/${user.id}`);
    }

    return (
        <div>
            <List items={users} renderItem={(user: UserType) => <UserItem key={user.id} user={user} callback={callBack}/>} />
        </div>
    )
}
