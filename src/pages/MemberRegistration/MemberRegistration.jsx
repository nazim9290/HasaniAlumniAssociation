import React from 'react'
import SEO from '../Shared/SEO/SEO'
import UserRegistration from './UserRegistration'
import Sponsre from '../Shared/Sponsore/Sponsre'

export default function MemberRegistration() {
  return (
    <div>
        <SEO title="Alumni Member Registration" description="Alumni Member Registration" 
        image="https://i.ibb.co/Kzm5MQZz/punormiloni.jpg"/>
        <UserRegistration></UserRegistration>
        <hr />
        <Sponsre image={"https://i.ibb.co/358MtLvp/5c7518e7-f349-48bc-b739-621f69c8ccd6.jpg"}></Sponsre>
        
    </div>
  )
}
