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
import Dashboard from "../DashBoard/DashBoard/DashBoard";
import Profile from "../DashBoard/DashBoard/Profile/Profile";
import AddCommittee from "../DashBoard/DashBoard/AddCommittee/AddCommittee";
import Teacher from "../pages/Teachers/Teacher";
import TeacherDashboard from "../DashBoard/DashBoard/AddTeacher/TeacherDashboard";
import AllTeachers from "../DashBoard/DashBoard/AddTeacher/AllTeachers";
import EditTeacher from "../DashBoard/DashBoard/AddTeacher/EditTeacher";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
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
        path: "/Events",
        element: <EventPage></EventPage>,
      },
      {
        path: "/Blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/Member",
        element: <AlumniStudents></AlumniStudents>,
      },
      {
        path: "/Registration",
        element: <MemberRegistration></MemberRegistration>,
      },
      {
        path: "/OurTeachers",
        element: <Teacher></Teacher>,
      },
      {
        path: "/Dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/Dashboard",
            element: <Profile></Profile>,
          },
          {
            path: "/Dashboard/addCommittee",
            element: <AddCommittee></AddCommittee>,
          },
          {
            path: "/Dashboard/addTeacher",
            element: <AllTeachers></AllTeachers>,
          },
          {
            path: "/Dashboard/addTeacher/add",
            element: <TeacherDashboard></TeacherDashboard>,
          },
          {
            path: "/Dashboard/addTeacher/edit/:teacherId",
            element: <EditTeacher></EditTeacher>,
          },
        ],
      },
    ],
  },
]);