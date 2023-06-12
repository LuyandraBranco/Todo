import React, { useState } from 'react';

export function TodoForm({ addTodo, closeModal }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (title) {
      addTodo({
        title,
        description,
        category,
        completed
      });
      setTitle('');
      setDescription('');
      setCategory('');
      setCompleted(false);
      closeModal(); // Feche a modal após adicionar a tarefa
    }
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        placeholder='Task title'
        onChange={e => setTitle(e.target.value)}
        value={title}
        required
      />
      <textarea
        className='todo-input'
        placeholder='Task description'
        onChange={e => setDescription(e.target.value)}
        value={description}
      />
      <input
        type='text'
        className='todo-input'
        placeholder='Task category'
        onChange={e => setCategory(e.target.value)}
        value={category}
      />
      <select
        className='todo-input'
        value={completed ? 'completed' : 'incomplete'}
        onChange={e => setCompleted(e.target.value === 'completed')}
      >
        <option value='incomplete'>Incomplete</option>
        <option value='completed'>Completed</option>
      </select>
      <button type='submit' className='todo-btn'>
        Add Task
      </button>
    </form>
  );
}
