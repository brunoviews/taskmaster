import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => {
  return (
    <ul className="listContainer">
      {tasks.map((task) => (
        <li key={task.id} className="listItem">
          <span className={task.completed ? 'completed' : ''}>
            {task.text}
          </span>
          <div className="btns">
            <button
              onClick={() => onToggleComplete(task.id)}
              className="button-completed"
            >
              {task.completed ? 'Desmarcar' : 'Completar'}
            </button>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="delete-button"
            >
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
