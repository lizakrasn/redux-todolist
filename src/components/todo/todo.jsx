import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../features/todosSlice';
import './todo.sass'

const Todo = ({title, id, completed}) => {
  const dispatch = useDispatch();

  const handleToggleTodo = () => {
    dispatch(toggleTodo({id, completed}))
  }

  const handleDeleteTodo = () => {
    dispatch(deleteTodo({id}))
  }

  return (
    <div className={completed ? 'todo todo-completed' : 'todo'}>
      <input
        className="todo__checkbox"
        type="checkbox"
        checked={completed}
        onClick={handleToggleTodo}
        readOnly
      />
      <p className="todo__title">{title}</p>
      <button
        className="todo__button"
        type="button"
        onClick={handleDeleteTodo}
      >
        Delete
      </button>
    </div>
  )
}

export default Todo
