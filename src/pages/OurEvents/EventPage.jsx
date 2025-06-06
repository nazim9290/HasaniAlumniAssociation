import React from 'react'
import Events from './Events'
import TitleBar from '../Shared/TitleBar/TitleBar'
import Sponsre from '../Shared/Sponsore/Sponsre'
import WebSEO from "../Shared/SEO/SEO";
import seoData from "../Shared/SEO/SeoData";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";

export default function EventPage() {
  return (
    <div>
      <WebSEO seo={seoData.event}></WebSEO>
      <TitleBar titleText="Our Events"></TitleBar>
      <Events></Events>
      <ProfilePhoto></ProfilePhoto>

      <Sponsre image="https://res.cloudinary.com/nazim929/image/upload/v1743091574/nihonElegentPoster_gdm9my.png"></Sponsre>
    </div>
  );
}
