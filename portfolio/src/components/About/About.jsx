import React from "react";
import "./About.css"
import Buttons from '../Button/Button'

const buttonItems = [
        {
            name: "GitHub",
            href: "https://github.com/mado8",
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/madeline-donley-0110/",
        },
]

function aboutSection() {

    

    return (
        <div className="col-12" id="about-me-section">
          <div className="curved">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffffff"
                // fill-opacity="1"
                d="M0,128L80,154.7C160,181,320,235,480,218.7C640,203,800,117,960,85.3C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="row g-0" id="about-me">
            <div className="col-sm-12 col-md-6" id="self-image-section">
              <div alt="Self Portrait" id="self-image"></div>
            </div>
            <div className="col-sm-12 col-md-6" id="about-text">
              <h3 className="section-headers">About Me</h3>
              <div id="about-me-content">
                <p>
                  Hi I'm Madeline and I am a MERN stack developer! I care about
                  making accessible, reusable, and out of the box products at
                  home and within my web development career. I have many hobbies
                  including botany, travel, gaming, and entomology!
                </p>
              </div>
              <Buttons buttonItems={buttonItems} openTab={true}/>
            </div>
          </div>
          <div className="curved">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffffff"
                // fill-opacity="1"
                d="M0,128L80,154.7C160,181,320,235,480,218.7C640,203,800,117,960,85.3C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
              ></path>
            </svg>
          </div>
        </div>
    )
}

export default aboutSection;