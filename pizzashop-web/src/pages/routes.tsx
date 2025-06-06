import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./app/dashboard/dashboard";
import { SignIn } from "./auth/sign-in";
import { SignUp } from "./auth/sign-up";
import { AppLayout } from "./_layouts/app";
import { AuthLayout } from "./_layouts/auth";
import { Orders } from "./app/orders/orders";
import { Error } from "./error";
import { NotFound } from "./404";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error />,
        children: [
            {path: '/', element: <Dashboard/>},
            {path: '/orders', element: <Orders/>},
        ]
    },

    {
        path: '/',
        element: <AuthLayout/>,
        children: [
            {path: '/sign-in', element: <SignIn/>},
            {path: '/sign-up', element: <SignUp/>},  
        ]
    }, 
    {
        path: '*',
        element: <NotFound/>
    }
    
    // {path: '/', element: <Dashboard/>},
    // {path: '/sign-in', element: <SignIn/>},
])