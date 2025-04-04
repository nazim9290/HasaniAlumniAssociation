import React from "react";
import TitleBar from "../../Shared/TitleBar/TitleBar";
import WebSEO from "../../Shared/SEO/SEO";
import seoData from "../../Shared/SEO/SeoData";

export default function ManagingCommittee() {
  return (
    <div>
      <WebSEO seo={seoData.madrasahCommittee}></WebSEO>
      <TitleBar titleText={"Managing Committee"}></TitleBar>
    </div>
  );
}
