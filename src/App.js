import React from 'react';
import './app.sass';
import Form from './components/form/form';
import TodoList from './components/todoList/todoList';

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Todo list</h1>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
