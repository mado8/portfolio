import React from 'react'

import './Nav.css'

function NavContent(props) {
  return (
    <div id='nav-container'>
      <div id='nav-items'>
        <ul className='nav justify-content-center'>
        {props.navItems.map((item) => (
            <li className='nav-item' key={item.id}>
              <a
                className='nav-link'
                aria-current='page'
                href={item.href}
                onClick={() => props.handlePage(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className='nav-item' key={7}>
              <a
                className='nav-link'
                aria-current='page'
                href="#resume"
                onClick={() => props.handlePage(true)}
              >
                Resume
              </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavContent
