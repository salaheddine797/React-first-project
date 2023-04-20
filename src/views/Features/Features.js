import React from 'react'
import "./Features.css"

function Features() {

    const obj = {
        title: "Features",
        paragraph : "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.",
    }

    const styleEls = {
        textAlign: "center",
        margin: "20px",
        color: "hsl(229, 31%, 21%)",
    }

  return (
    <div className='features'>
        <h3 style={styleEls}>{obj.title}</h3>
        <p  style={styleEls}>{obj.paragraph}</p>
    </div>
  )
}

export default Features;