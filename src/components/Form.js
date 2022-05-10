import './Form.css'
import {useState} from 'react';

function Form(props){

    const [enteredTask,setEnteredTask] = useState('');

    const onChangeEventHander = event => {
        setEnteredTask(event.target.value);
    }

    const onClickEventHandler = () => {
        const newTask = {
            key: Math.random().toString(),
            value: enteredTask,
            done: false
        }
        setEnteredTask('');
        props.getEnteredTask(newTask);
    }

    return (
        <div id='form-container'>
            <form id='form-element'>
                <input type='text' placeholder='Enter a task...' value={enteredTask} onChange={onChangeEventHander} id='task' name='task' required/>
                <button type='submit' id='btn' onClick={onClickEventHandler}>Add TODO</button>
            </form>
        </div>
    );
}

export default Form;