import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Organization/About/About/About";
import EventPage from "../pages/OurEvents/EventPage";
import Blogs from "../pages/Blogs/Blogs";
import AlumniStudents from "../pages/Members/AlumniStudent/AlumniStudents";
import MemberRegistration from "../pages/MemberRegistration/MemberRegistration";
import Dashboard from "../DashBoard/DashBoard/DashBoard";
import Profile from "../DashBoard/DashBoard/Profile/Profile";
import AddCommittee from "../DashBoard/DashBoard/AddCommittee/AddCommittee";
import Teacher from "../pages/AboutMadrasah/Teachers/Teachers";
import TeacherDashboard from "../DashBoard/DashBoard/AddTeacher/TeacherDashboard";
import AllTeachers from "../DashBoard/DashBoard/AddTeacher/AllTeachers";
import EditTeacher from "../DashBoard/DashBoard/AddTeacher/EditTeacher";
import OurHistory from "./../pages/Organization/OurHistory/OurHistory";
import ConveningCommittee from "./../pages/Organization/ConveningCommittee/ConveningCommittee";
import Constitution from "./../pages/Organization/Constitution/Constitution";
import MadrasahInfo from "../pages/AboutMadrasah/MadrasahInfo/MadrasahInfo";
import ManagingCommittee from "./../pages/AboutMadrasah/ManagingCommittee/ManagingCommittee";
import Notice from "./../pages/Notice/Notice";
import NotFound from "../pages/NotFound/NotFound";
import LoginForm from "../pages/LoginSignup/Login";
import SignForm from "../pages/LoginSignup/Signup";

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
        path: "/aboutUs",
        element: <About></About>,
      },
      {
        path: "/history",
        element: <OurHistory></OurHistory>,
      },
      {
        path: "/ConveningCommittee",
        element: <ConveningCommittee></ConveningCommittee>,
      },
      {
        path: "/Constitution",
        element: <Constitution></Constitution>,
      },

      {
        path: "/OurTeachers",
        element: <Teacher></Teacher>,
      },
      {
        path: "/madrasahInfo",
        element: <MadrasahInfo></MadrasahInfo>,
      },
      {
        path: "/ManagingCommittee",
        element: <ManagingCommittee></ManagingCommittee>,
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
        path: "/AlumniMembers",
        element: <AlumniStudents></AlumniStudents>,
      },
      {
        path: "/Registration",
        element: <MemberRegistration></MemberRegistration>,
      },
      {
        path: "/Notice",
        element: <Notice></Notice>,
      },
      {
        path: "/login",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/Signup",
        element: <SignForm></SignForm>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
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
            path: "/Dashboard/allTeacher",
            element: <AllTeachers></AllTeachers>,
          },
          {
            path: "/Dashboard/allTeacher/add",
            element: <TeacherDashboard></TeacherDashboard>,
          },
          {
            path: "/Dashboard/allTeacher/edit/:teacherId",
            element: <EditTeacher></EditTeacher>,
          },
        ],
      },
    ],
  },
]);