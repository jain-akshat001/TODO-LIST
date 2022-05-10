import './App.css';
import React,{useState} from "react";
import { ReactDOM } from "react";
import TodoList from './components/TodoList';
import Form from './components/Form';

import Noty from 'noty';  
import "../node_modules/noty/lib/noty.css";  
import "../node_modules/noty/lib/themes/mint.css";  

let DUMMY_TASKS = [
  {
    key: '01',
    value: 'Home Work',
    done: false
  },
  {
    key: '02',
    value: 'Quiz',
    done: false
  },
  {
    key: '03',
    value: 'Assignment',
    done: false
  }
];

function App(props){

  let [allTasks,setTasks] = useState(DUMMY_TASKS);
  const getNewTask = (task) => {
      let updatedTask = {
        ...task
      }
      let updatedTasks = [...allTasks,updatedTask];
      setTasks(updatedTasks);
  }

  const deletingTask = task => {
    console.log(task);
    let updatedTasks = allTasks.filter(
      currTask => {
        return currTask.key != task.key; 
      }
    ); 

    setTasks(updatedTasks);
  } 

    return (
      <div>
        <h1 id='heading'>My TODO List</h1>
        <Form getEnteredTask={getNewTask} notyHandler={props.notyHandler}/>
        <TodoList deleteSeletedTask={deletingTask} tasks={allTasks} notyHandler={props.notyHandler}/>
      </div>
    );
}

export default App;
