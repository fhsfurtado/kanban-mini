import React, { useState } from "react";
import "./styles.css";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import TaskList from "./Components/TaskList/TaskList";

let idAcc = 0;

const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };
  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };
  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          onAddTask={addTask}
          taskState="Pendente"
          title="Pendente"
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          onAddTask={addTask}
          taskState="Fazendo"
          title="Fazendo"
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          onAddTask={addTask}
          taskState="Finalizado"
          title="Finalizado"
          tasks={tasks.filter((t) => t.state === "Finalizado")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
      <Footer />
    </div>
  );
}
