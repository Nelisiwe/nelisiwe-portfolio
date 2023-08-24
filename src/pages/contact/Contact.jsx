import React, { useState } from 'react';
import { db } from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaLinkedin, FaGithub, FaWhatsapp  } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi'
import "./contact.css"


const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const userCollectionRef = collection(db, "contactdata")

  const handleSubmit =() => {
    addDoc(userCollectionRef, {
      name: name,
      email: email,
      subject: subject,
      message: message,
    }).then(() => {
      if(!alert("Form Submitted Successfully")) document.location = 'https://google.com/'
    })

  }
 
  return (
    <section className='contact section'>
      <h2 className='section_title'>
        Get in <span>Touch</span>
      </h2>

      <div className='contact_container container grid'>
        <div className='contact_data'>
          <h3 className='contact_title'>LET'S WORK TOGETHER</h3>
          <p className='contact_description'>
            Feel freen to get in touch with me. I am always open to discussing new project, creative ideas or opportunities to be part of your vision.
          </p>

          <div className="contact_info">
            <div className='info_item'>
              <FaEnvelopeOpen className='info_icon' />
              
              <div>
                <span className='info_title'>Mail me</span>
                <h4 className='info_desc'> nelimajobe@gmail.com</h4>
              </div>
            </div>

            <div className='info_item'>
              <FaPhoneSquareAlt className='info_icon' />
              
              <div>
                <span className='info_title'>Call me</span>
                <h4 className='info_desc'>+2771 5918 903</h4>
              </div>
            </div>
          </div>
          <div className='contact_socials'>
            <a href='https://github.com/Nelisiwe?tab=repositories' className='contact_social-link'>
              < FaGithub/>
            </a>

            <a href='https://www.linkedin.com/in/nelisiwe-gumede-2b393122b/' className='contact_social-link'>
              <FaLinkedin />
            </a>

            <a href='https://wa.link/xxs17c' className='contact_social-link'>
              <FaWhatsapp />
            </a>
          </div>       
        </div>

        <form className='contact_form'>
          <div className='form_input-group'>
            <div className='form_input-div'>
              <input 
              type='text' 
              placeholder='Your Name' 
              className='form_control' onChange={(event) => {
                setName(event.target.value)
              }}/>
            </div>

            <div className='form_input-div'>
              <input 
                type='email' 
                placeholder='Your Email' 
                className='form_control' onChange={(event) => {
                  setEmail(event.target.value)
                }}/>
            </div>
            <div className='form_input-div'>
              <input 
                type='text' 
                placeholder='Subject' 
                className='form_control' onChange={(event) => {
                  setSubject(event.target.value)
                }}/>
            </div>
          </div>  
          <div className='form_input-div'>
            <textarea 
              placeholder='Your Message' 
              className='form_control textarea'onChange={(event) => {
                setMessage(event.target.value)
              }}
            ></textarea>
            </div>
            <button className='contact_button' onClick={handleSubmit}>
              Send
              <span className="button_icon contact_button-icon">
                <FiSend />
              </span>
            </button>
        </form>
      </div>
    </section>
  )
}

export default Contact