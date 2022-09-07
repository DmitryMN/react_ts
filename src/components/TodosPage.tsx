import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TodoType } from '../types/types'
import List from './List'
import { TodoItem } from './TodoItem'

export const TodosPage = () => {

    const [todos, setTodos] = useState<TodoType[]>([]);

    useEffect(() => {
        fetchTodo();
    }, []);
    
    async function fetchTodo() {
        try {
          const res = axios.get<TodoType[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
          setTodos([...(await res).data]);
        } catch (e) {
          alert(e)
        }
      }

    return (
        <div>
            <List items={todos} renderItem={(todo: TodoType) => <TodoItem key={todo.id} todo={todo} />} />
        </div>
    )
}
