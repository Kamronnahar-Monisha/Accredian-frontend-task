import { createBrowserRouter } from "react-router-dom";
import SignUp from "../Components/SignUp/SignUp";
import Login from "../Components/Login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <SignUp></SignUp>
    },
    {
        path: "/sign-up",
        element: <SignUp></SignUp>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
]);