import { createContext, useContext, useReducer } from "react";
import { initialTodos } from "../data/initialTodos";
import todoReducer from "../reducers/todoReducer";

export const TodoContext = createContext(null);

export function TodoProvider({ children }) {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);

    const handleEditTodos = (todo) => {
        dispatch({
            type: "edited",
            id: todo.id,
            task: todo.task,
            completed: todo.completed,
        });
    };

    const handleDeleteTodos = (todoId) => {
        dispatch({
            type: "deleted",
            id: todoId,
        });
    };

    const handleAddTodo = (task) => {
        dispatch({
            type: "added",
            task,
        });
    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                onChangeTodo: handleEditTodos,
                onDeleteTodo: handleDeleteTodos,
                onAddTodo: handleAddTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export function useTodo() {
    return useContext(TodoContext);
}
