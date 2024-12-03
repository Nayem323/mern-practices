import { useState } from "react";

const Counter = () => {
    const [value, setValue] = useState(0);
    const increaseValue = () => {
        setValue(value + 1);
    };

    const decreaseValue = () => {
        setValue(value - 1);
    };

    return (
        <div>
            <h1>Counter</h1>
            <p>{value}</p>
            <button onClick={increaseValue}>Increment</button>
            <button onClick={decreaseValue}>Decrement</button>
        </div>
    );
};

export default Counter;
