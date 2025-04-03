import React from 'react'
import AlumniStudent from './AlumniStudent'
import TitleBar from "../../Shared/TitleBar/TitleBar";

import ResponsiveDrawer from "../../Shared/Drawer/ResponsiveDrawer";
import WebSEO from "../../Shared/SEO/SEO";

export default function AlumniStudents() {
  return (
    <div>
      <WebSEO
        title="Hasania | Alumni Students"
        description="All Alumni Students List"
      />
      <TitleBar titleText="Alumni Students"></TitleBar>
      <ResponsiveDrawer></ResponsiveDrawer>
      {/* <AlumniStudent></AlumniStudent> */}
    </div>
  );
}
