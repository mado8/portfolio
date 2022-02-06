import React from 'react'
import './Skills.css'
import Card from './SkillCard'
import Logos from './SkillLogos'

const skillCards = [
  {
    "id": 1,
    "name": 'Skills',
    "listItems": [
      'JavaScript',
      'Express',
      'MongoDB',
      'MySQL',
      'Sequelize',
      'Jest',
    ],
  },
  {
    "id": 2,
    "name": 'Skills',
    "listItems": ['HTML', 'CSS', 'React', 'Bootstrap', 'Node', 'Webpack'],
  },
  {
    "id": 3,
    "name": 'Skills',
    "listItems": ['Git', 'MacOS', 'Heroku', 'Microsoft Office', 'jQuery', ''],
  },
]

const skillLogos = [
  'https://img.icons8.com/ios/50/000000/javascript--v1.png',
  'https://img.icons8.com/external-tal-revivo-light-tal-revivo/48/000000/external-nodejs-is-an-open-source-cross-platform-javascript-run-time-environment-logo-light-tal-revivo.png',
  'https://img.icons8.com/ios/50/000000/react-native--v1.png',
  'https://img.icons8.com/external-tal-revivo-light-tal-revivo/48/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-light-tal-revivo.png',
  'https://img.icons8.com/ios/50/000000/html-5--v1.png',
  'https://img.icons8.com/ios/50/000000/css3.png',
  'https://img.icons8.com/external-tal-revivo-regular-tal-revivo/48/000000/external-bootstrap-a-free-and-open-source-css-framework-logo-regular-tal-revivo.png',
  'https://img.icons8.com/ios/50/000000/git.png',
  'https://img.icons8.com/external-tal-revivo-light-tal-revivo/48/000000/external-github-community-for-software-building-and-testing-online-logo-light-tal-revivo.png',
  'https://img.icons8.com/ios/50/000000/mysql-logo.png',
  'https://img.icons8.com/external-tal-revivo-light-tal-revivo/48/000000/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-light-tal-revivo.png',
]

function createSkillsSection() {
  return (
    <div className='col-12' id='skills'>
      <div className='row g-0' id='skill-section'>
        <div className='col-sm-12 col-md-2' id='skill-icons'>
          <h3 className='section-headers'>Skills</h3>
        </div>
        <Logos skillLogos={skillLogos} />
        <Card skillCards={skillCards} />
      </div>
    </div>
  )
}

export default createSkillsSection
