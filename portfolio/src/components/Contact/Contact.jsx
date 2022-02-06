import React from 'react'
import './Contact.css'
import Button from '../Button/Button'

const button = [
    {
        "name": "Submit",
        "href": "#intro",
    }
]

// const formHandler = () => {
//   const form = document.getElementById('form-section');
//   console.log(form)
//   return false;
// }

export default function CreateContactForm() {

  // React.useEffect(() => {
  //   const buttonEl = document.querySelectorAll('.Submit')[0];
  //   console.log(buttonEl)
  //   // buttonEl.addEventListener('click', formHandler())
  // })

  return (
    <div id="contact-me">
      <h3 className='section-headers' id="contact-header">Contact</h3>
      <div id='input-container'>
        <form id='form-section'>
          <div>
            <label>
              <input type='text' placeholder='Your Name'/>
            </label>
          </div>
          <div>
            <label>
              <input type='text' placeholder='Your Email'/>
            </label>
          </div>
          <div>
            <label>
              <textarea type='text' placeholder='Your Message' />
            </label>
          </div>
          <Button buttonItems={button} newTab={false}/>
        </form>
      </div>
    </div>
  )
}
