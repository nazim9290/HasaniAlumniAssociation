import WebSEO from "../../../Shared/SEO/SEO";
import seoData from "../../../Shared/SEO/SeoData";
import TitleBar from "../../../Shared/TitleBar/TitleBar";

import AboutAlumni from "./../AboutAlumni/AboutAlumni";

export default function About() {
  return (
    <>
      <WebSEO seo={seoData.about} />
      <TitleBar titleText="About of Hasania Alumni Association" />
      <AboutAlumni></AboutAlumni>
    </>
  );
}
