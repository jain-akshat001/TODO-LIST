import './TodoListItem.css';
import {useState} from 'react';

function TodoListItem(props){

    let [checkbox,setCheckbox] = useState(props.text.done);
    function clickEventHandler(event){
        event.preventDefault();
        props.onDelete(props.text);
        props.notyHandler('Task deleted successfully');
    }

    let checkEventHandler = (event) => {
        let isChecked = checkbox;
        setCheckbox(!isChecked);
        props.notyHandler('Task toggled successfully');
    }

    const textStyle = {
        textDecoration: 'line-through'
    }

    return (
        <div className='task-item-container'>
            <div className='checkbox'><input type="checkbox" onClick={checkEventHandler} /></div>
            <div className='task' style={checkbox ? textStyle : {textDecoration: 'none'}}><h4>{props.text.value}</h4></div>
            <div className='delete-btn'><a href='/delete-task' onClick={clickEventHandler}>Delete Task</a></div>
        </div>
    );
}

export default TodoListItem;