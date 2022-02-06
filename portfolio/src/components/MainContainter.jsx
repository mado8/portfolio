import React, { useState } from 'react'
import Navbar from './Navbar/Nav'
import Intro from './Introduction/Intro'
import About from './About/About'

function MainContainer() {
  return (
    <div id='main-container'>
      <div className='row sub-containers g-0'>
          <Navbar />
            <Intro />
            <About />
          </div>
        <div>
        </div>
      </div>
  )
}

export default MainContainer
