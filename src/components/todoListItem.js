import './TodoListItem.css';

function TodoListItem(props){

    return (
        <div className='task-item-container'>
            <div className='checkbox'><input type="checkbox" /></div>
            <div className='task'><h4>{props.text}</h4></div>
            <div className='delete-btn'><a href='/delete-task'>Delete Task</a></div>
        </div>
    );
}

export default TodoListItem;