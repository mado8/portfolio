import React from 'react'

function createLogos(props) {
  return (
    <div className='col-sm-12 col-md-2' id='icon-section'>
      <div>
        {props.skillLogos.map((logo) => (
          <img src={logo} alt="" key={logo}></img>
        ))}
      </div>
    </div>
  )
}

export default createLogos;