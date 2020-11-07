import React from 'react'
import './background.css'

function Background({countryData}) {
    const { flag } = countryData

    return <div style={{backgroundImage: `url(${flag})` }} className="background"></div>
}

export default Background