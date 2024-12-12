import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import { RouterProvider } from "react-router";
import { rootRouter } from "./routers/router";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={rootRouter} />
    </StrictMode>
);
