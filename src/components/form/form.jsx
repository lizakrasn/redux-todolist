import {React, useState} from 'react';
import './form.sass'

const Form = () => {
  const [value, setValue] = useState('');

  return (
    <div className="form">
      <input
        className="form__input"
        type="text"
        onChange={(event) => {setValue(event.target.value)}}
      />

      <button
        type="button"
        className="form__button"
        // onChange={addTodo}
      >
        Add
      </button>
    </div>
  )
}

export default Form
