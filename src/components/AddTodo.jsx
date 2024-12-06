import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

export default function AddTodo() {
    const [task, setTask] = useState("");

    const { onAddTodo } = useTodo();

    return (
        <>
            <input
                type="text"
                placeholder="Add Todo"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button
                onClick={() => {
                    setTask("");
                    onAddTodo(task);
                }}
            >
                Add
            </button>
        </>
    );
}
