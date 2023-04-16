import React from 'react'
import Navbar from '../components/Navbar/Navbar'

export default function withNavbar(Component) {
  function MyNav(){
    return (
      <div style={{display:'flex'}}>
        <Navbar />
        <div style={componentStyle}>
          <Component />
        </div>
      </div>
    )
  }
  return MyNav
}


const componentStyle = {
    'backgroundColor': 'var(--bgColor)',
    'flexGrow': 1,
    margin: '0 10px',
    borderRadius: '10px',
    padding: '20px'
}