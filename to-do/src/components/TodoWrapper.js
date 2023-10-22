import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoWrapper() {
    return (
        <div className='TodoWrapper'>
            <h1>Add your works here</h1>
            <TodoForm />
            <Todo />
        </div>
    )
}

export default TodoWrapper