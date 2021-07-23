import React from 'react';
import './app.sass';
import Form from './components/form/form';
import TodoList from './components/todoList/todoList';
import FilterButtons from './components/filterButtons/filterButtons';

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
