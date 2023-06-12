import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import { Modal } from "./Modal"; // Importe o componente Modal

uuidv4();

export function TodoWrapperLocalStorage() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a abertura/fechamento da modal

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      {
        id: uuidv4(),
        title: todo.title,
        description: todo.description,
        category: todo.category,
        completed: todo.completed,
        isEditing: false,
      },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setIsModalOpen(false); // Feche a modal após adicionar a tarefa
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  };

  const editTask = (task, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            title: task.title,
            description: task.description,
            category: task.category,
            isEditing: !todo.isEditing,
          }
        : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h1>ToDo List</h1>
      <div className="TodoWrapper">
        <div className="containerButton">
          <button onClick={openModal} className="button">
            Add Task
          </button>{" "}
        </div>

        {/* Botão para abrir a modal */}
        {isModalOpen && ( // Renderize a modal se isModalOpen for true
          <Modal closeModal={closeModal}>
            <TodoForm addTodo={addTodo} closeModal={closeModal} />
          </Modal>
        )}
        {todos.map((todo, index) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} key={index} />
          ) : (
            <Todo
              task={todo}
              key={index}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        )}
      </div>
    </>
  );
}
