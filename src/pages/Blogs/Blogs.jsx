import React from 'react'
import Blog from './Blog'
import Sponsre from "../Shared/Sponsore/Sponsre";
import WebSEO from "../Shared/SEO/SEO";

export default function Blogs() {
  return (
    <div>
      <WebSEO
        title="Blogs | hasania alumni"
        description="hasania alumni | Blogs"
      />
      <Blog></Blog>

      <Sponsre image="https://res.cloudinary.com/nazim929/image/upload/v1743089695/guideline_ipsxwc.jpg"></Sponsre>
    </div>
  );
}
