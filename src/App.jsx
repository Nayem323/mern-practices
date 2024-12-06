import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./contexts/TodoContext";

export default function App() {
    return (
        <div>
            <h1 className="centered">Todo App</h1>
            <TodoProvider>
                <AddTodo />
                <TodoList />
            </TodoProvider>
        </div>
    );
}
