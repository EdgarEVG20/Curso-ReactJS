import React, { useState, Fragment, useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [showImportant, SetShowImportant] = useState(false);

  useEffect(() => {
    console.log("1 era vez renderizado");
    handleLoadTodos();
  }, []);

  const handleLoadTodos = async () => {
    console.log("Cargando usuarios...");

    const fetchData = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await fetchData.json();
    setTodos(todos);
  };
  console.log("Usuarios: ", todos);
  const handleButton = () => {
    SetShowImportant(!showImportant);
  };

  const todosAmostrar = showImportant
    ? todos.filter((todos) => todos.completed === true)
    : todos;

  return (
    <div className="contenedorTodo">
      <h1>Usuarios</h1>
      <button onClick={handleButton}>
        Mostrar {showImportant ? "todos" : "Completados"}
      </button>
      {todos.length === 0 ? (
        <Fragment>
          <p>No hay usuarios.</p>
        </Fragment>
      ) : (
        <Fragment>
          <p>Usuarios.</p>
          {todosAmostrar.map((todos, index) => {
            return (
              <tr key={index}>
                <td>{todos.id}</td>
                <td>{todos.title}</td>
              </tr>
            );
          })}
        </Fragment>
      )}
    </div>
  );
};
export default Todo;
