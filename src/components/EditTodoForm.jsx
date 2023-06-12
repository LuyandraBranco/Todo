import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [category, setCategory] = useState(task.category);
  const [completed, setCompleted] = useState(task.completed);

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(
      {
        title: value,
        description,
        category,
        completed
      },
      task.id
    );
  };

  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
        className='todo-input'
        placeholder='Update task'
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        className='todo-input'
        placeholder='Update description'
      />
      <input
        type='text'
        value={category}
        onChange={e => setCategory(e.target.value)}
        className='todo-input'
        placeholder='Update category'
      />
      <select
        value={completed ? 'completed' : 'incomplete'}
        onChange={e => setCompleted(e.target.value === 'completed')}
        className='todo-input'
      >
        <option value='incomplete'>Incomplete</option>
        <option value='completed'>Completed</option>
      </select>
      <button type='submit' className='todo-btn'>
        Update Task
      </button>
    </form>
  );
};
