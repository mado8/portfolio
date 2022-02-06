import React from 'react'

function createSkillCard(props) {
  return (
    <div className='col-sm-12 col-md-8' id='skill-card-section'>
      {props.skillCards.map((card) => (
        <div className='card skill-card' id='backend-card' key={card.id}>
          <h4>{card.name}</h4>
          <ul className='list-group list-group-flush'>
            {card.listItems.map((skill) => (
                <li key={skill + "1"}>✓ {skill}</li>
            ))}
          </ul>
        </div>
      ))}
      {props.skillCards.map((card) => (
        <div className='card skill-card' id='backend-card' key={card.id + "1"}>
          <h4>{card.name}</h4>
          <ul className='list-group list-group-flush'>
            {card.listItems.map((skill) => (
                <li key={skill + "2"}>✓ {skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default createSkillCard;
