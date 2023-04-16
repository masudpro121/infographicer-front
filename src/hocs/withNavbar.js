import React from 'react'
import Navbar from '../components/Navbar/Navbar'

export default function withNavbar(Component) {
  function MyNav(){
    return (
      <div style={{display:'flex'}}>
        <Navbar />
        <Component />
      </div>
    )
  }
  return MyNav
}
