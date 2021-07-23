import React from 'react';
import { useSelector } from 'react-redux';
import Todo from '../todo/todo';
import './todoList.sass'

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const active = useSelector(state => state.todos.active);

  if (active === 'all') {
    return (
      <div className="todoList">
        {
          todos.allTodos.map(todo => {
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
  } else if (active === 'completed') {
    return (
      <div className="todoList">
        {
          todos.completedTodos.map(todo => {
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
  } else if (active === 'active') {
    return (
      <div className="todoList">
        {
          todos.activeTodos.map(todo => {
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

  
}

export default TodoList
