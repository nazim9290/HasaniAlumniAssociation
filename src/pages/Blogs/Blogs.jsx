import React from 'react'
import Blog from './Blog'
import Sponsre from "../Shared/Sponsore/Sponsre";
import WebSEO from "../Shared/SEO/SEO";
import seoData from "../Shared/SEO/SeoData";

export default function Blogs() {
  return (
    <div>
      <WebSEO seo={seoData.blog} />
      <Blog></Blog>

      <Sponsre image="https://res.cloudinary.com/nazim929/image/upload/v1743089695/guideline_ipsxwc.jpg"></Sponsre>
    </div>
  );
}
