import './TodoList.css'
import TodoListItem from './TodoListItem';
function TodoList(){

    const tasks = ['Home Work', 'Dinner', 'Project'];

    return (
        <div id='list-container'>
            <TodoListItem text={tasks[0]} />
            <TodoListItem text={tasks[1]} />
            <TodoListItem text={tasks[2]} />
        </div>
    )
}

export default TodoList;