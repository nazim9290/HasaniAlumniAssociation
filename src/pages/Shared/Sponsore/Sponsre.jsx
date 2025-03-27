import React from 'react'

export default function Sponsre({image}) {
  return (
    <div>
        <div>
        <h4 style={{textAlign:"Center"}}>Sponsor </h4>
      <img
        width="100%"
        src={image}
        alt="sponsore"
        height="300"
      />
      </div>
    </div>
  )
}
