import { memo } from "react";

const Title = () => {
    console.log("Title rendered");
    return <h1>Simple Counter App</h1>;
};

export default memo(Title);
