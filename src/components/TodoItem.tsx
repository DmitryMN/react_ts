import React from 'react';
import { TodoType } from '../types/types';

type TodoItemPropsType = {
    todo: TodoType
}

export const TodoItem: React.FC<TodoItemPropsType> = ({todo}) => {
  return (
    <div>
        <input type="checkbox" checked={todo.completed}></input>
        {todo.id}. {todo.title} 
    </div>
  )
}
