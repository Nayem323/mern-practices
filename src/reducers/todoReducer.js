export default function todoReducer(state, action) {
    switch (action.type) {
        case "added":
            return [
                ...state,
                {
                    id: state.length + 1,
                    task: action.task,
                    completed: false,
                },
            ];
        case "deleted":
            return state.filter((todo) => todo.id !== action.id);
        case "edited":
            return state.map((todo) =>
                todo.id === action.id
                    ? {
                          ...todo,
                          task: action.task,
                          completed: action.completed,
                      }
                    : todo
            );
        default:
            return state;
    }
}
