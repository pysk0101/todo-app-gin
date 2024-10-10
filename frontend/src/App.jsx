import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Lists from "./components/Lists";
import useDarkModeStore from "./Store/darkMode";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/todos");
        setTodos(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Veri alma hatası:", error);
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo List</h1>
      </header>
      <main className="app-main">
        {loading ? (
          <div className="loading">Yükleniyor...</div>
        ) : (
          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <span className="todo-title">{todo.title}</span>
                <span className={`todo-status ${todo.completed ? 'status-completed' : 'status-pending'}`}>
                  {todo.completed ? "Tamamlandı" : "Beklemede"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;
