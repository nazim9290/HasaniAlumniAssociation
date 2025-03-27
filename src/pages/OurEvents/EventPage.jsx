import React from 'react'
import Events from './Events'
import TitleBar from '../Shared/TitleBar/TitleBar'
import Sponsre from '../Shared/Sponsore/Sponsre'

export default function EventPage() {
  return (
    <div>
        <TitleBar titleText="Our Events"></TitleBar>
        <Events></Events>

        <Sponsre image="https://res.cloudinary.com/nazim929/image/upload/v1743091574/nihonElegentPoster_gdm9my.png">
        </Sponsre>
    </div>
  )
}
