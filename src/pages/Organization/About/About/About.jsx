import WebSEO from "../../../Shared/SEO/SEO";
import TitleBar from "../../../Shared/TitleBar/TitleBar";

import AboutAlumni from "./../AboutAlumni/AboutAlumni";

export default function About() {
  return (
    <>
      <WebSEO
        title="About | Hasania Alumni"
        description="about hasania alumin association"
      />
      <TitleBar titleText="About of Hasania Alumni Association" />
      <AboutAlumni></AboutAlumni>
    </>
  );
}
