import { useTodo } from "../contexts/TodoContext";
import Todo from "./Todo";

export default function TaskList() {
    const { todos } = useTodo();
    return (
        <>
            <h2 className="mt-1">Todos</h2>
            <ul>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
        </>
    );
}
