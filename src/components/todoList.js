import './TodoList.css'
import TodoListItem from './TodoListItem';
import React,{useState} from "react";

function TodoList(props){

    return (
        <div id='list-container'>
            {
                props.tasks.map(
                    task => (
                        <TodoListItem text={task} />
                    )
                )
            }
        </div>
    )
}

export default TodoList;