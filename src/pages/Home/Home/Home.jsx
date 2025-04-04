import React from 'react'
import HomeCarousel from '../HomeCarousel/HomeCarousel'
import MissionVission from '../MissionVission/MissionVission'
import AboutMadrasha from '../AboutMadrasha/AboutMadrasha'
import Message from '../Message/Message'
import Event from '../Event/Event'
import Sponsre from "../../Shared/Sponsore/Sponsre";
import DefaultPopup from "../DefaultPopup/DefaultPopup";
import Testimonial from "../Testimonial/Testimonial";
import WebSEO from "../../Shared/SEO/SEO";
import seoData from "../../Shared/SEO/SeoData";

export default function Home() {
  return (
    <div>
      <WebSEO seo={seoData.home} />
      {/* <DefaultPopup></DefaultPopup> */}
      <HomeCarousel></HomeCarousel>
      <MissionVission></MissionVission>
      <AboutMadrasha></AboutMadrasha>
      <Event></Event>
      <Message></Message>
      <Testimonial></Testimonial>
      <Sponsre image={"https://i.ibb.co/2M2d9mw/Screenshot-5.png"}></Sponsre>
    </div>
  );
}
