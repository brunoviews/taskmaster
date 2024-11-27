import React from "react";
import "./TaskList.css";
import { motion } from "framer-motion";

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => {
  return (
    <ul className="listContainer">
      {tasks.map((task) => (
        <motion.li
          key={task.id}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="listItem"
        >
          <span className={task.completed ? "completed" : ""}>{task.text}</span>
          <div className="btns">
            <button
              onClick={() => onToggleComplete(task.id)}
              className="button-completed"
            >
              {task.completed ? "Desmarcar" : "Completar"}
            </button>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="delete-button"
            >
              Eliminar
            </button>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};

export default TaskList;
