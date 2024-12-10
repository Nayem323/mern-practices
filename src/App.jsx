import { useState, useCallback, useMemo } from "react";
import Title from "./components/Title";
import CounterText from "./components/CounterText";
import Button from "./components/Button";

export default function App() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const countHandler = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const count2Handler = useCallback(() => {
        setCount2((prevCount) => prevCount + 2);
    }, []);

    const isEven = useMemo(() => {
        let i = 1;
        while (i <= 1000000000) {
            i++;
        }
        return count % 2 === 0 ? "Even" : "Odd";
    }, [count]);

    return (
        <div>
            <Title />
            <CounterText count={count} />
            <p>Value is: {isEven}</p>
            <Button clickHandler={countHandler} buttonText="Increase 1" />
            <hr />
            <CounterText count={count2} />
            <Button clickHandler={count2Handler} buttonText="Increase 2" />
        </div>
    );
}
