import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Transactions from "../pages/Transactions";
import Root from "../pages/Root";

export const rootRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/transactions", element: <Transactions /> },
        ],
    },
]);
