import React from "react";
import TitleBar from "../../Shared/TitleBar/TitleBar";
import WebSEO from "../../Shared/SEO/SEO";
import seoData from "../../Shared/SEO/SeoData";

export default function OurHistory() {
  return (
    <div>
      <WebSEO seo={seoData.ourHistory}></WebSEO>
      <TitleBar titleText={"Our History"}></TitleBar>
    </div>
  );
}
