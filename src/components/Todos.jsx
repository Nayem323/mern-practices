import { useState } from "react";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    const handleTodos = () => {
        setTodos(initialTodos);
    };

    const handleEditTodo = (id) => {
        return () => {
            const newTodos = todos.map((todo) =>
                todo.id === id
                    ? { ...todo, text: todo.text + " (edited)" }
                    : todo
            );
            setTodos(newTodos);
        };
    };

    return (
        <div>
            <h1>Todo List</h1>
            <button onClick={handleTodos}>Get Todos</button>
            <ul>
                {todos.map((todo) =>
                    todo.text ? (
                        <li key={todo.id}>
                            {todo.text}
                            <button onClick={handleEditTodo(todo.id)}>
                                Edit
                            </button>
                        </li>
                    ) : null
                )}
            </ul>
        </div>
    );
};

const initialTodos = [
    { id: 0, text: "Visit Kafka Museum", done: true },
    { id: 1, text: "", done: true },
    { id: 2, text: "Watch a puppet show", done: false },
    { id: 3, text: "Lennon Wall pic", done: false },
];

export default Todos;
