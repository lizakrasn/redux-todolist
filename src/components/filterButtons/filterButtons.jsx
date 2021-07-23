import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterAllTodos, filterCompletedTodos, filterActiveTodos } from '../../features/todosSlice';
import './filterButtons.sass';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleFilterAllTodos = () => {
    dispatch(filterAllTodos(todos));
  }

  const handleFilterCompletedTodos = () => {
    dispatch(filterCompletedTodos(todos));
  }

  const handleFilterActiveTodos = () => {
    dispatch(filterActiveTodos(todos));
  }

  return (
    <div className="filterButtons">
      <button
        className="filterButtons__button"
        type="button"
        onClick={handleFilterAllTodos}
      >
        All
      </button>

      <button
        className="filterButtons__button"
        type="button"
        onClick={handleFilterCompletedTodos}
      >
        Completed
      </button>

      <button
        className="filterButtons__button"
        type="button"
        onClick={handleFilterActiveTodos}
      >
        Active
      </button>

    </div>
  )
}

export default FilterButtons
