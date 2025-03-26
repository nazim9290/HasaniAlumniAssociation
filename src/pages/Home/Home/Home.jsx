import React from 'react'
import HomeCarousel from '../HomeCarousel/HomeCarousel'
import MissionVission from '../MissionVission/MissionVission'
import AboutMadrasha from '../AboutMadrasha/AboutMadrasha'
import Message from '../Message/Message'
import Event from '../Event/Event'
import SEO from '../../Shared/SEO/SEO'
import Sponsre from '../../Shared/Sponsore/Sponsre'


export default function Home() {
  return (
    <div>
        <SEO title="Home | Hasania Alumni Association" description="Welcome to alumni website!" />
        <HomeCarousel></HomeCarousel>
        <MissionVission></MissionVission>
       <AboutMadrasha></AboutMadrasha>
       <Event></Event>
       <Message></Message>
       <Sponsre image={"https://i.ibb.co/2M2d9mw/Screenshot-5.png"}></Sponsre>
    </div>
  )
}
