import './App.css';
import React from "react";
import { ReactDOM } from "react";
import TodoList from './components/TodoList';
import Form from './components/Form';

function App(){
    return (
      <div>
        <h1 id='heading'>My TODO List</h1>
        <Form />
        <TodoList />
      </div>
    );
}

export default App;
