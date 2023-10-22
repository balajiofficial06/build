import React, { useState } from 'react'
import { db } from '../utils/db'


function TodoForm() {
    const [task, setTask] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        const date = new Date();
        date.setDate(date.getDate() + 1);
        console.log(date)
        db.tasks.add({ task, notes: 'None', deadLine: date, completed: false })
        setTask('')
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>

            <input type='text' value={task} className='todo-input' placeholder='Add you task' onChange={(e) => setTask(e.target.value)}></input>
            <button className='todo-btn' type='submint'>Add</button>

        </form>
    )
}

export default TodoForm