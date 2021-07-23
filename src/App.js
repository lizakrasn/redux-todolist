import React from 'react';
import './app.sass';
import Form from './components/form/form';

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Todo list</h1>
      <Form />
    </div>
  );
}

export default App;
