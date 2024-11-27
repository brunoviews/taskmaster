import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      onAddTask({ id: Date.now(), text: taskInput, completed: false });
      setTaskInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formContainer">
    <input
      type="text"
      value={taskInput}
      onChange={(e) => setTaskInput(e.target.value)}
      placeholder="Añadir una nueva tarea"
      className="input"
    />
    <button
      type="submit"
      className="button-add"
    >
      Añadir
    </button>
   
  </form>
  );
};

export default TaskForm;