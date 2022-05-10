import './TodoList.css'
import TodoListItem from './TodoListItem';
import React,{useState} from "react";

function TodoList(props){

    function deleteTaskHandler(deletedTask){
        console.log(deletedTask);
        props.deleteSeletedTask(deletedTask);
    }

    let onToggleTask = toggledTask => {
        console.log(toggledTask);
    }

    return (
        <div id='list-container'>
            {
                props.tasks.map(
                    task => (
                        <TodoListItem text={task} onDelete={deleteTaskHandler} onClickCheckbox={onToggleTask} notyHandler={props.notyHandler}/>
                    )
                )
            }
        </div>
    )
}

export default TodoList;