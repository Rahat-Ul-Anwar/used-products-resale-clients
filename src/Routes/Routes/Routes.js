import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Blog from "../../pages/Blog/Blog";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Products from "../../pages/Products/Products";
import NoFound from "../../pages/NoFound/NoFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/watchCategories/:id',
                loader: ({params}) => {
                 return   fetch(`http://localhost:5000/watchCategories/${params.id}`)
                },
                element: <Products></Products>
            },

            {
                path: '*',
                element: <NoFound></NoFound>
            }
        ],
        

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }


]);
 