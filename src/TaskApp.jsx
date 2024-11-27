import React, { useState } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import { useEffect } from 'react';
import './TaskApp.css';


const TaskApp = () => {
  const [tasks, setTasks] = useState(() => {
    // Cargar las tareas desde localStorage al cargar la aplicación
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  useEffect(() => {
    // Guardar las tareas en localStorage cada vez que se actualizan
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleCompleteTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className='main-container'>
    <div className="appContainer">
      <h1 className="header"><span className='title'>TaskMaster Lite</span></h1>
      <div className="container">
        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} onToggleComplete={toggleCompleteTask} onDeleteTask={deleteTask} />
      </div>
    </div>
    </div>
  );
};

export default TaskApp;