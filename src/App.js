import './App.css';
import React,{useState} from "react";
import { ReactDOM } from "react";
import TodoList from './components/TodoList';
import Form from './components/Form';

let DUMMY_TASKS = ['Home Work', 'Dinner', 'Project'];

function App(){

  let [allTasks,setTasks] = useState(DUMMY_TASKS);
  const getNewTask = (task) => {
      console.log(task);
      let updatedTasks = [...allTasks,task];
      setTasks(updatedTasks);
  }

    return (
      <div>
        <h1 id='heading'>My TODO List</h1>
        <Form getEnteredTask={getNewTask}/>
        <TodoList tasks={allTasks}/>
      </div>
    );
}

export default App;
