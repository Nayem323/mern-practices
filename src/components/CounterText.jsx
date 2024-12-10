import { memo } from "react";

const CounterText = ({ count }) => {
    console.log("CounterText rendered");
    return <p>Value of the counter is {count}</p>;
};

export default memo(CounterText);
