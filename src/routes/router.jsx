import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import ToyDetails from "../pages/ToyDetails";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyProfile from "../pages/MyProfile";
import Toys from "../pages/Toys";
import PriviteRoute from "../provider/PriviteRoute";
import Error from "../components/Error";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/toys',
                element: <Toys></Toys>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/toys/:toyId',
                element: <PriviteRoute>
                    <ToyDetails></ToyDetails>
                </PriviteRoute>
            },
            {
                path: '/myprofile',
                element: <PriviteRoute>
                    <MyProfile></MyProfile>
                </PriviteRoute>
            },
        ]
    },
    {
        path: '/*',
        element: <Error></Error>
    }
])

export default router;