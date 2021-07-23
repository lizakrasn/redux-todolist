import React from 'react'
import './todo.sass'

const Todo = ({title, id, completed}) => {
  return (
    <div className="todo">
      <input
        className="todo__checkbox"
        type="checkbox"
        checked={completed}
      />
      <p className="todo__title">{title}</p>
      <button
        className="todo__button"
        type="button"
        // onClick={deleteTodo}
      >
        Delete
      </button>
    </div>
  )
}

export default Todo
