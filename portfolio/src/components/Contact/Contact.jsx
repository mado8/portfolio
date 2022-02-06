import './Contact.css'
import React, { Component } from 'react'

export default class CreateContactForm extends Component {
  constructor() {
    super()
    this.state = {
      input: {},
      errors: {},
    }

    this.successModal = this.successModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  successModal() {
    return (
      <div class='modal' tabindex='-1' role='dialog'>
        <div class='modal-dialog' role='document'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title'>Modal title</h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              <p>Modal body text goes here.</p>
            </div>
            <div class='modal-footer'>
              <button type='button' class='btn btn-primary'>
                Save changes
              </button>
              <button
                type='button'
                class='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleChange(event) {
    let input = this.state.input
    input[event.target.name] = event.target.value

    this.setState({
      input,
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.validate()) {
      console.log(this.state)

      let input = {}
      input['name'] = ''
      input['email'] = ''
      input['message'] = ''
      this.setState({ input: input })

      alert('Your message has been sent')
    }
  }

  validate() {
    let input = this.state.input
    let errors = {}
    let isValid = true

    if (!input['name']) {
      isValid = false
      errors['name'] = 'Please enter your name.'
    }

    if (!input['email']) {
      isValid = false
      errors['email'] = 'Please enter your email Address.'
    }

    if (typeof input['email'] !== 'undefined') {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      )
      if (!pattern.test(input['email'])) {
        isValid = false
        errors['email'] = 'Please enter valid email address.'
      }
    }

    if (!input['message']) {
      isValid = false
      errors['message'] = 'Please enter your message.'
    }

    if (errors.name) {
      alert(errors.name)
    }
    if (errors.email) {
      alert(errors.email)
    }
    if (errors.message) {
      alert(errors.message)
    }

    this.setState({
      errors: errors,
    })

    return isValid
  }

  render() {
    return (
      <div id='contact-me'>
        <h3 className='section-headers' id='contact-header'>
          Contact
        </h3>
        <div id='input-container'>
          <form id='form-section' onSubmit={this.handleSubmit}>
            <div>
              <label>
                <input
                  name='name'
                  type='text'
                  onChange={this.handleChange}
                  value={this.state.input.name}
                  placeholder='Your Name'
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  name='email'
                  type='text'
                  onChange={this.handleChange}
                  value={this.state.input.email}
                  placeholder='Your Email'
                />
              </label>
            </div>
            <div>
              <label>
                <textarea
                  name='message'
                  type='text'
                  onChange={this.handleChange}
                  value={this.state.input.message}
                  placeholder='Your Message'
                />
              </label>
            </div>
            <div className='button-inline'>
              <input type='submit' value='Submit' className='link-button' />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
