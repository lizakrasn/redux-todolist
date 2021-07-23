import React from 'react';
import { useSelector } from 'react-redux';
import Todo from '../todo/todo';
import './todoList.sass'

const TodoList = () => {
  const todos = useSelector((state) => state.todos.allTodos);

  return (
    <div className="todoList">
      {
        todos.map(todo => {
          return (
            <Todo
              title = {todo.todo}
              id = {todo.id}
              completed = {todo.completed}
              key = {todo.id}
            />
          )
        })
      }
    </div>
  )
}

export default TodoList
