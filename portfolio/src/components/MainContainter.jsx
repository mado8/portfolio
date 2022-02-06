import React, { useState } from 'react'
import Navbar from './Navbar/Nav'
import Intro from './Introduction/Intro'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Portfolio/Projects'
import Contact from './Contact/Contact'
import Resume from './Resume/Resume'
import Footer from './Footer/Footer'

const navItems = [
  {
    id: 1,
    name: 'Home',
    href: '#intro',
  },
  {
    id: 2,
    name: 'About',
    href: '#about-me',
  },
  {
    id: 3,
    name: 'Skills',
    href: '#skills',
  },
  {
    id: 5,
    name: 'Portfolio',
    href: '#portfolio',
  },
  {
    id: 6,
    name: 'Contact Me',
    href: '#contact-me',
  },
]

const projectList = [
  {
    id: 1,
    name: 'Employee Tracker',
    description:
      'This employee tracker allows the user to imput information and generate an HTML page with easy access.',
    size: 'small-project',
    buttons: [
      {
        name: 'GitHub',
        href: 'https://github.com/mado8/employee-tracker',
      },
      {
        name: 'Live Url',
        href: 'https://mado8.github.io/employee-tracker/',
      },
    ],
  },
  {
    id: 2,
    name: 'Dirt!',
    description: '',
    size: 'large-project',
    buttons: [
      {
        name: 'GitHub',
        href: 'https://github.com/Josey9087/Dirt',
      },
      {
        name: 'Live Url',
        href: 'https://dirt93873.herokuapp.com/',
      },
    ],
  },
  {
    id: 3,
    name: 'Management System',
    description: '',
    size: 'large-project',
    buttons: [
      {
        name: 'GitHub',
        href: 'https://github.com/mado8/employee-management-system',
      },
    ],
  },
  {
    id: 4,
    name: 'E-Commerce Backend',
    description: '',
    size: 'small-project',
    buttons: [
      {
        name: 'GitHub',
        href: 'https://github.com/mado8/e-commerce-back-end',
      },
      {
        name: 'Live Url',
        href: '#',
      },
    ],
  },
  {
    id: 5,
    name: 'Game Go',
    description: '',
    size: 'small-project',
    buttons: [
      {
        name: 'GitHub',
        href: 'https://github.com/mthurber82/videogameapp',
      },
      {
        name: 'Live Url',
        href: 'https://mthurber82.github.io/videogameapp/',
      },
    ],
  },
  {
    id: 6,
    name: 'Work Day Scheduler',
    description: '',
    size: 'large-project',
    buttons: [
      {
        name: 'GitHub',
        href: 'https://github.com/mado8/work-calendar',
      },
      {
        name: 'Live Url',
        href: 'https://mado8.github.io/work-calendar/',
      },
    ],
  },
]

const MainContainer = () => {
  const [page, setPage] = useState(false)
  const handlePage = (page) => {
    setPage(page)
  }

  return (
    <div id='main-container'>
      <div className='row sub-containers g-0'>
        <div>
          <Navbar navItems={navItems} handlePage={handlePage} />
        </div>
        {page ? (
          <Resume />
        ) : (
          <div>
            <Intro />
            <About />
            <Skills />
            <Projects projectList={projectList} />
            <Contact />
          </div>
        )}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default MainContainer
