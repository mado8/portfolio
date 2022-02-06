import React from 'react'
import Button from '../Button/Button'
import './Projects.css'

const createProject = (props) => {
  return (
    <div className='col-12' id='portfolio'>
      <div className='centered'>
        <h3 className='section-headers'>Projects</h3>
        <div id='project-section'>
          <div className='project-row'>
            {props.projectList.map((project) => (
              <div className={project.size + ' project'} key={project.id}>
                <div
                  id={'image-' + project.id}
                  alt={project.name}
                  className='image'
                ></div>
                <div className='overlay'>
                  <div className='text'>
                    <h5>{project.name}</h5>
                    {/* import buttons to live url and github */}
                    <div className="project-buttons">
                       <Button buttonItems={project.buttons} openTab={true}/> 
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default createProject
