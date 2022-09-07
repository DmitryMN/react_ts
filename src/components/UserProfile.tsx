import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserType } from '../types/types';



export const UserProfile: React.FC = () => {
    const [user, setUser] = useState<UserType | null>(null);
    const {id} = useParams();
    // use useNavigate instead useHistory react router 6
    const history = useNavigate();

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
            const request = await axios.get<UserType | null>('https://jsonplaceholder.typicode.com/users/' + id);
            setUser(request.data);
        } catch(e) {
            alert(e);
        }
    }

    const onClickHandler = () => {
        history('/users');
    }

    return (
        <div>
            <button onClick={onClickHandler}>возврат</button>
            <h3>Страница пользователя: {user?.name}</h3>
            <div>{user?.email}</div>
            <div>{user?.address.city}-{user?.address.street}</div>
        </div>
    )
}
