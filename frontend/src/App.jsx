import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import "./app.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminMain from "./pages/AdminMain";
import User from "./components/admin/user/User";
import Dashboard from "./components/admin/global/Dashboard";
import Doctor from "./components/admin/doctor/Doctor";
import Post from "./components/admin/post/Post";
import UserAdd from "./components/admin/user/UserAdd";
import DoctorAdd from "./components/admin/doctor/DoctorAdd";
import UserUpdate from "./components/admin/user/UserUpdate";
import PostAdd from "./components/admin/post/PostAdd";

const App = () => {
    // User Layout with Navbar
    const Layout = () => {
        return (
            <>
                <Navbar />
                <Outlet />
            </>
        );
    };

    const AdminLayout = () => {
        return (
            <>
                <AdminMain />
            </>
        );
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                },
            ],
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/signup",
            element: <SignupPage />,
        },
        {
            path: "/admin",
            element: <AdminLayout />,
            children: [
                {
                    path: "",
                    element: <Dashboard />,
                },
                {
                    path: "user",
                    element: <User />,
                },
                {
                    path: "adduser",
                    element: <UserAdd />,
                },
                {
                    path: "updateuser/:id",
                    element: <UserUpdate />,
                },
                {
                    path: "doctor",
                    element: <Doctor />,
                },
                {
                    path: "adddoctor",
                    element: <DoctorAdd />,
                },
                {
                    path: "post",
                    element: <Post />,
                },
                {
                    path: "addpost",
                    element: <PostAdd />,
                },
            ],
        },
    ]);

    return (
        <div className="flex justify-center min-h-screen">
            <div className="App font-heading w-full max-w-[343px]  md:max-w-[704px] lg:max-w-[1240px] ">
                <RouterProvider router={router} />
            </div>
        </div>
    );
};

export default App;