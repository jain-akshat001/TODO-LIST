import './TodoList.css'
import TodoListItem from './TodoListItem';
import React,{useState} from "react";

function TodoList(props){

    function deleteTaskHandler(deletedTask){
        console.log(deletedTask);
        props.deleteSeletedTask(deletedTask);
    }

    return (
        <div id='list-container'>
            {
                props.tasks.map(
                    task => (
                        <TodoListItem text={task} onDelete={deleteTaskHandler}/>
                    )
                )
            }
        </div>
    )
}

export default TodoList;