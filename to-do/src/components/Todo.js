import React from 'react'
import { db } from '../utils/db'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import EditDialog from './EditDialog'

import { useLiveQuery } from "dexie-react-hooks";


function Todo() {

    const tasks = useLiveQuery(() => db.tasks.toArray());

    const toggleTodo = async (id) => {
        const todo = await db.tasks.get(id);
        if (todo) {
            await db.tasks.update(id, { completed: !todo.completed });
        }
    };

    function editTodo(id) {
        console.log(id)
    }

    const deleteTodo = async (id) => {
        await db.tasks.delete(id);
    };

    return (

        tasks && tasks.length ? ( // Add a check for the existence of tasks and its length
            tasks.map((todo) => (
                <div className='Todo' key={todo.id}>
                    <p className={`${todo.completed ? 'completed' : 'incomplete'}`} onClick={() => toggleTodo(todo.id)}>{todo.task}</p>
                    <div className='todoIcons'>
                        {/* <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(todo.id)} /> */}
                        <EditDialog task={todo} />
                        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(todo.id)} />
                    </div>
                </div>
            ))
        ) : (
            <div>No tasks available</div> // Display a message if tasks is empty
        )

    )
}

export default Todo