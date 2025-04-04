import React from "react";
import TitleBar from "../../Shared/TitleBar/TitleBar";
import WebSEO from "../../Shared/SEO/SEO";
import seoData from "../../Shared/SEO/SeoData";

export default function ConveningCommittee() {
  return (
    <div>
      <WebSEO seo={seoData.conveningCommittee}></WebSEO>
      <TitleBar titleText={"Convening Committee Members"}></TitleBar>
    </div>
  );
}
