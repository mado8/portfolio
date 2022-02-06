import React from 'react'
import Button from '../Button/Button'
import './Intro.css'

const buttonItems = [
  {
    name: 'Hire Me',
    href: '#contact-me',
  },
]

function IntroContent() {
  return (
    <div className='col-12' id='intro'>
      <div id='name-section'>
        <div>
          <h2 id='name-introduction'>Madeline A. Donley</h2>
          <p>Full Stack Developer</p>
        </div>
      </div>
      <div id='intro-buttons'>
        <Button buttonItems={buttonItems} openTab={false} />
      </div>
    </div>
  )
}

export default IntroContent
