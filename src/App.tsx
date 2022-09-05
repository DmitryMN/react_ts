import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Card, CardVariant} from './components/Card';
import { TodoType, UserType } from './types/types';
import List from './components/List';
import {UserItem} from './components/UserItem';
import {TodoItem} from './components/TodoItem';
import {EventsExample} from './components/EventsExample';


function App() {

  const [users, setUsers] = useState<UserType[]>([]);
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodo();
  }, []);

  async function fetchUsers() {
    try {
      const res = axios.get<UserType[]>('https://jsonplaceholder.typicode.com/users');
      setUsers([...(await res).data])
    } catch(e) {
      alert(e)
    } 
  }

  async function fetchTodo() {
    try {
      const res = axios.get<TodoType[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos([...(await res).data]);
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div className="App">
      Работает!
      <Card width='200px' height='100px' variant={CardVariant.primary}>
        <button>кнопка</button>
      </Card>
      <List items={users} renderItem={(user: UserType) => <UserItem key={user.id} user={user} />}/>
      <List items={todos} renderItem={(todo: TodoType) => <TodoItem key={todo.id} todo={todo} />}/>
      <EventsExample />
    </div>
  );
}

export default App;
