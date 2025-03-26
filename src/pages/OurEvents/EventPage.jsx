import React from 'react'
import Events from './Events'
import TitleBar from '../Shared/TitleBar/TitleBar'

export default function EventPage() {
  return (
    <div>
        <TitleBar titleText="Our Events"></TitleBar>
        <Events></Events>
    </div>
  )
}
