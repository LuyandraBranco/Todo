import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export function Todo({
  task,
  toggleComplete,
  deleteTodo,
  editTodo
}) {
  return (
    <div className='Todo'>
      <p
        className={`${task.completed ? 'completed' : ''}`}
        onClick={() => toggleComplete(task.id)}
      >
        Title: {task.title}
      </p>
      <p className='space'>Description: {task.description}</p>
      <p className='space'>Category: {task.category}</p>
      <p className='space'>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
}
