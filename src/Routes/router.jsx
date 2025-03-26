import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About/About";
import EventPage from "../pages/OurEvents/EventPage";
import Blogs from "../pages/Blogs/Blogs";
import AlumniStudents from "../pages/Members/AlumniStudent/AlumniStudents";
import MemberRegistration from "../pages/MemberRegistration/MemberRegistration";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/Home",
            element: <Home></Home>,
        },
        {
            path: "/About",
            element: <About></About>,
        },
        {
            path:"/Events",
            element:<EventPage></EventPage>
        },
        {
            path:"/Blogs",
            element:<Blogs></Blogs>
        },
        {
            path:"/Member",
            element:<AlumniStudents></AlumniStudents>
        },
        {
            path:"/Registration",
            element:<MemberRegistration></MemberRegistration>

        }
      ]
    },
  ]);