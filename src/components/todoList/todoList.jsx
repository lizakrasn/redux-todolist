import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todo from '../todo/todo';
import './todoList.sass'

const TodoList = () => {
  const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);

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
