import React, { useState } from 'react';

export function TodoForm({ addTodo }) {

    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (value) {
            addTodo(value);
            setValue('');
        }
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input
                type="text"
                className='todo-input'
                placeholder='What is the task today?'
                onChange={(e) => setValue(e.target.value)}
                value={value}
                required
            />
            <button
                type='submit'
                className='todo-btn'>
                Add task
            </button>
        </form>
    )
}