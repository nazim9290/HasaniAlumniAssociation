import React from 'react'
import HomeCarousel from '../HomeCarousel/HomeCarousel'
import MissionVission from '../MissionVission/MissionVission'
import AboutMadrasha from '../AboutMadrasha/AboutMadrasha'
import Message from '../Message/Message'
import Event from '../Event/Event'
import SEO from '../../Shared/SEO/SEO'


export default function Home() {
  return (
    <div>
        <SEO title="Home | Hasania Alumni Association" description="Welcome to alumni website!" />
        <HomeCarousel></HomeCarousel>
        <MissionVission></MissionVission>
       <AboutMadrasha></AboutMadrasha>
       <Event></Event>
       <Message></Message>

       <div>
       <h4 style={{textAlign:"Center"}}>Sponsor </h4>
      <img
        width="100%"
        src="https://i.ibb.co/2M2d9mw/Screenshot-5.png"
        alt=""
      />
       </div>
    </div>
  )
}
