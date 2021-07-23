import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterAllTodos, filterCompletedTodos, filterActiveTodos } from '../../features/todosSlice';
import './filterButtons.sass';

const FilterButtons = () => {
  // const dispatch = useDispatch();
  const active = useSelector(state => state.todos.active);

  // const handleFilterAllTodos = () => {
  //   dispatch(filterAllTodos(todos));
  // }

  // const handleFilterCompletedTodos = () => {
  //   dispatch(filterCompletedTodos(todos));
  // }

  // const handleFilterActiveTodos = () => {
  //   dispatch(filterActiveTodos(todos));
  // }

  return (
    <div className="filterButtons">
      <button
        className={active === 'all' ? "filterButtons__button active" : "filterButtons__button"}
        type="button"
        // onClick={handleFilterAllTodos}
      >
        All
      </button>

      <button
        className={active === 'completed' ? "filterButtons__button active" : "filterButtons__button"}
        type="button"
        // onClick={handleFilterCompletedTodos}
      >
        Completed
      </button>

      <button
        className={active === 'active' ? "filterButtons__button active" : "filterButtons__button"}
        type="button"
        // onClick={handleFilterActiveTodos}
      >
        Active
      </button>
    </div>
  )
}

export default FilterButtons
