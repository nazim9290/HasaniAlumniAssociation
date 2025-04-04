import React from 'react'
import UserRegistration from "./UserRegistration";
import Sponsre from "../Shared/Sponsore/Sponsre";
import WebSEO from "../Shared/SEO/SEO";
import seoData from "../Shared/SEO/SeoData";

export default function MemberRegistration() {
  return (
    <div>
      <WebSEO seo={seoData.membership} />

      <UserRegistration></UserRegistration>
      <hr />
      <Sponsre
        image={
          "https://i.ibb.co/358MtLvp/5c7518e7-f349-48bc-b739-621f69c8ccd6.jpg"
        }
      ></Sponsre>
    </div>
  );
}
