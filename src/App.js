import React from 'react';
import './app.sass';
import FilterButtons from './components/filterButtons/filterButtons';
import Form from './components/form/form';
import TodoList from './components/todoList/todoList';

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Todo list</h1>
      <Form />
      <FilterButtons />
      <TodoList />
    </div>
  );
}

export default App;
