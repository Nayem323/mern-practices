import { memo } from "react";

const Button = ({ clickHandler, buttonText }) => {
    console.log("Button rendered");
    return <button onClick={clickHandler}>{buttonText}</button>;
};

export default memo(Button);
