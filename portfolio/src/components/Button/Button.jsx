import React from 'react'
import './Button.css'

function OpenNew(props) {
  return (
    <div>
      {props.buttonItems.map((button) => (
        <div className=" button-inline" key={button.href}>
          <a
            className={ button.name + ' link-button'}
            href={button.href}
            rel='noreferrer'
            target='_blank'
          >
            {button.name}
          </a>
        </div>
      ))}
    </div>
  )
}

function OpenSame(props) {
  return (
    <div>
      {props.buttonItems.map((button) => (
        <div className="button-inline" key={button.href}>
          <a
            className='link-button'
            href={button.href}
          >
            {button.name}
          </a>
        </div>
      ))}
    </div>
  )
}

const createButton = (props) => {
  if(props.openTab === true) {
    return <OpenNew buttonItems={props.buttonItems}/>
  } else {
    return <OpenSame buttonItems={props.buttonItems}/>
  }
}

export default createButton
