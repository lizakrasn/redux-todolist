import {React, useState} from 'react';
import { useDispatch } from 'react-redux';
import './form.sass'
import { addTodo } from '../../features/todosSlice';

const Form = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo({title: value}));
  }

  return (
    <div className="form">
      <input
        className="form__input"
        type="text"
        value={value}
        onChange={(event) => {setValue(event.target.value)}}
      />

      <button
        type="button"
        className="form__button"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  )
}

export default Form
