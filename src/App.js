import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      const task = { id: Date.now(), text: newTask };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>To-Do List</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>
          Add Task
        </button>
      </div>
      <ul style={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.listItem}>
            {task.text}
            <button
              onClick={() => deleteTask(task.id)}
              style={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 40px 80px rgba(10, 10, 10, 0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  inputContainer: {
    display: "flex",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginRight: "10px",
  },
  addButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "4px",
    marginBottom: "10px",
  },
  deleteButton: {
    padding: "5px 10px",
    fontSize: "14px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default TodoList;