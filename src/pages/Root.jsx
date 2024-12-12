import { Link, Outlet } from "react-router";

const Root = () => {
    return (
        <div>
            <h1 className="centered pb-1">
                <Link to="/">Simple Banking App</Link>
            </h1>
            <Outlet />
        </div>
    );
};

export default Root;
