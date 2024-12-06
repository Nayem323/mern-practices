import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

export default function Task({ todo }) {
    const [isEditing, setIsEditing] = useState(false);

    const { onChangeTodo, onDeleteTodo } = useTodo();

    const taskContent = isEditing ? (
        <>
            <input
                className="mx-.5"
                type="text"
                value={todo.task}
                onChange={(e) =>
                    onChangeTodo({
                        ...todo,
                        task: e.target.value,
                    })
                }
            />
            <button onClick={() => setIsEditing(false)} className="mx-.5">
                Save
            </button>
        </>
    ) : (
        <>
            <span className="mx-.5">{todo.task}</span>
            <button onClick={() => setIsEditing(true)} className="mx-.5">
                Edit
            </button>
        </>
    );

    return (
        <>
            <li>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) =>
                        onChangeTodo({
                            ...todo,
                            completed: e.target.checked,
                        })
                    }
                />
                {taskContent}
                <button className="mx-.5" onClick={() => onDeleteTodo(todo.id)}>
                    Delete
                </button>
            </li>
        </>
    );
}
