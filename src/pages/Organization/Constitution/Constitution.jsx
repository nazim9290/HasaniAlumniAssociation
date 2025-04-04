import React from "react";
import TitleBar from "../../Shared/TitleBar/TitleBar";
import ConstitutionAccording from "./ConstitutionAccording";
import WebSEO from "../../Shared/SEO/SEO";
import seoData from "../../Shared/SEO/SeoData";

export default function Constitution() {
  return (
    <div>
      <WebSEO seo={seoData.constitution}></WebSEO>
      <TitleBar titleText={"Alumni Association Constitution"}></TitleBar>
      <ConstitutionAccording></ConstitutionAccording>
    </div>
  );
}
