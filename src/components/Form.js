import './Form.css'

function Form(){
    return (
        <div id='form-container'>
            <form id='form-element'>
                <input type='text' placeholder='Enter a task...' id='task' name='task' required/>
                <button type='submit' id='btn'>Add TODO</button>
            </form>
        </div>
    );
}

export default Form;