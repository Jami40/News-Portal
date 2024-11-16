import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import NewSection from "../Components/NewSection";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"",
                element:<Navigate to={"/category/01"}></Navigate>

            },
            {
                path:"/category/:id",
                element:<NewSection></NewSection>,
                loader:({ params })=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                

            }
        ]
        
    },
    {
        path:"news/:id",
        element:<PrivateRoutes>
            <NewsDetails></NewsDetails>
        </PrivateRoutes>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path:"auth",
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                element:<Login></Login>
            },
            {
                path:"/auth/register",
                element: <Register></Register>
            }
        ]
    }
])

export default router;