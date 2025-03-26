import React from 'react'
import AlumniStudent from './AlumniStudent'
import TitleBar from '../../Shared/TitleBar/TitleBar'
import SEO from '../../Shared/SEO/SEO'

export default function AlumniStudents() {
  return (
    <div>
        <SEO title="Hasania | Alumni Students" description="All Alumni Students List" />
        <TitleBar titleText="Alumni Students"></TitleBar>
        <AlumniStudent></AlumniStudent>
        </div>
  )
}
