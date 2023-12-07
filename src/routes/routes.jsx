import { createBrowserRouter } from "react-router-dom";
import SignUp from "../Components/SignUp/SignUp";
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home";

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
    {
        path: "/home",
        element: <Home></Home>
    },
]);