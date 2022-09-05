import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Card, CardVariant} from './components/Card';
import { UserList } from './components/UserList';
import { UserType } from './types/types';


function App() {

  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const res = axios.get<UserType[]>('https://jsonplaceholder.typicode.com/users');
      setUsers([...(await res).data])
    } catch(e) {
      alert(e)
    } 
  }

  return (
    <div className="App">
      Работает!
      <Card width='200px' height='100px' variant={CardVariant.primary}>
        <button>кнопка</button>
      </Card>
      <UserList users={users}/>
    </div>
  );
}

export default App;
