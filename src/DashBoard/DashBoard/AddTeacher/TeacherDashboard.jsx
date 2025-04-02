import React from "react";
import AddTeacher from "./AddTeacher";
import TitleBar from "../../../pages/Shared/TitleBar/TitleBar";
import TopBarNavigation from "../../../Component/TopBarNavigation/TopBarNavigation";

export default function TeacherDashboard() {
  return (
    <div>
      <TopBarNavigation
        t1={"All Teacher"}
        t2={"Add Teacher"}
      ></TopBarNavigation>
      <TitleBar titleText="Add Madrasah Teacher" />
      <AddTeacher></AddTeacher>
    </div>
  );
}
