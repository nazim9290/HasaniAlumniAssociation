import React from "react";
import TitleBar from "../../Shared/TitleBar/TitleBar";
import PdfViewerComponent from "../../../Component/PdfViewerComponent/PdfViewerComponent";
import WebSEO from "../../Shared/SEO/SEO";
import seoData from "../../Shared/SEO/SeoData";

export default function MadrasahInfo() {
  return (
    <div>
      <WebSEO seo={seoData.madrasahInfo}></WebSEO>
      <TitleBar titleText={"About Madrasah"}></TitleBar>
      <PdfViewerComponent></PdfViewerComponent>
    </div>
  );
}
