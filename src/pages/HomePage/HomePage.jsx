import React from 'react'
import Home from '../../components/Home/Home'
import About from '../../components/About/About'
import Sector from '../../components/Sector/Sector'
import Service from '../../components/Service/Service'

function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Service />
      <Sector />
    </>
  )
}

export default HomePage