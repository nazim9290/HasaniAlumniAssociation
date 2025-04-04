import React from "react";
import TitleBar from "../Shared/TitleBar/TitleBar";
import WebSEO from "../Shared/SEO/SEO";
import seoData from "../Shared/SEO/SeoData";

export default function Notice() {
  return (
    <div>
      <WebSEO seo={seoData.notice}></WebSEO>
      <TitleBar titleText={"Notice"}></TitleBar>
    </div>
  );
}
