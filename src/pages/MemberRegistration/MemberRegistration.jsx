import React from 'react'
import SEO from '../Shared/SEO/SEO'
import UserRegistration from './UserRegistration'

export default function MemberRegistration() {
  return (
    <div>
        <SEO title="Alumni Member Registration" description="Alumni Member Registration" 
        image="https://i.ibb.co/Kzm5MQZz/punormiloni.jpg"/>
        <UserRegistration></UserRegistration>
    </div>
  )
}
