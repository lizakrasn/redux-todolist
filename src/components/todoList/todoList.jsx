import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
  const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);

  return (
    <div className="todoList">
      {
        todos.map(todo => {
          return (
            
          )
        })
      }
    </div>
  )
}

export default TodoList
