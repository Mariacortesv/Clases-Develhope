import React, { useState } from "react";
import styles from './TodoList.module.scss'

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  // Agregar Reset
  const handleResetTodos = () => {
    setTodos([]);
  };

  //Agregar RemoveTodo
  const handleRemoveTodo = (indexToRemove) => {
    const updatedTodos = todos.filter(
      (n, currentIndex) => currentIndex !== indexToRemove
    );
    setTodos(updatedTodos);
  };

  return (
    <div className={styles["container-todolist"]}>
      <h3>Ejercicio Lists & State 1, 2 y 3</h3>
      <h3>Ejercicio Styling Components 3</h3>
      <ul >
        {todos.map((todo, index) => (
          <li className={styles["li-todo"]} key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className={styles["input-todo"]}>
      <input

        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add To Do</button>
      <button onClick={handleResetTodos}>Reset</button>
      </div>
    </div>
  );
}

/* Crea un componente llamado TodoList que renderice una 
etiqueta ul con una etiqueta li para cada elemento contenido 
en la variable de estado todos.
La variable de estado todos debe ser un array de cadenas.
El componente TodoList también debe contener una etiqueta input y un botón.
Cuando se hace clic en el botón, el manejador de eventos debe agregar 
el valor de la etiqueta input al array todos.*/
