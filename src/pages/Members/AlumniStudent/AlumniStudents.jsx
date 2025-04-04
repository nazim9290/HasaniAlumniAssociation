import React from 'react'
import AlumniStudent from './AlumniStudent'
import TitleBar from "../../Shared/TitleBar/TitleBar";

import ResponsiveDrawer from "../../Shared/Drawer/ResponsiveDrawer";
import WebSEO from "../../Shared/SEO/SEO";
import seoData from "../../Shared/SEO/SeoData";

export default function AlumniStudents() {
  return (
    <div>
      <WebSEO seo={seoData.alumniMember} />
      <TitleBar titleText="Alumni Students"></TitleBar>
      <ResponsiveDrawer></ResponsiveDrawer>
      {/* <AlumniStudent></AlumniStudent> */}
    </div>
  );
}
