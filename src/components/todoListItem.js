import './TodoListItem.css';
import {useState} from 'react';

function TodoListItem(props){

    function clickEventHandler(event){
        event.preventDefault();
        props.onDelete(props.text);
    }

    return (
        <div className='task-item-container'>
            <div className='checkbox'><input type="checkbox" /></div>
            <div className='task'><h4>{props.text.value}</h4></div>
            <div className='delete-btn'><a href='/delete-task' onClick={clickEventHandler}>Delete Task</a></div>
        </div>
    );
}

export default TodoListItem;