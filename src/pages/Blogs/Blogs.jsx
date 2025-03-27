import React from 'react'
import Blog from './Blog'
import SEO from '../Shared/SEO/SEO'
import Sponsre from '../Shared/Sponsore/Sponsre'

export default function Blogs() {
  return (
    <div>
        <SEO title="Blogs | hasania alumni" description="hasania alumni | Blogs" />
        <Blog></Blog>

        <Sponsre image="https://res.cloudinary.com/nazim929/image/upload/v1743089695/guideline_ipsxwc.jpg">
        </Sponsre>
        
    </div>
  )
}
