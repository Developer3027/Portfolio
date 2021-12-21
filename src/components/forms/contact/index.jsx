import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import emailjs from 'emailjs-com';

import './style/contact.style.css';

const ContactUs = () => {
  const [mail, setMail] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setMail(true);
    emailjs
      .sendForm(
        'service_akre7hr',
        'template_c36krrs',
        e.target,
        'user_HoHBVLe2Oc5kqKGS00qd8'
      )
      .then(
        (result) => {
          console.log(mail);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  if (mail === true) {
    return <Redirect exact to='/' />;
  }

  return (
    <div className='contactContainer'>
      <section className='ContactWrapper'>
        <div className='contactTopDiv' />
        <form className='contactForm' onSubmit={sendEmail}>
          <p className='contactText'>
            There are many ways to get in touch with me. My email address is
            dev3027@mason-roberts.com, or you can drop a quick tweet at
            @Developer3027, or I have provided this form!
          </p>
          <label className='contactLabel'>Name</label>
          <input className='contactInput' type='text' name='user_name' />
          <label className='contactLabel'>Email</label>
          <input className='contactInput' type='email' name='user_email' />
          <label className='contactLabel'>Message</label>
          <textarea className='contactTextArea' name='message' rows='8' />
          <input className='contactInputButton' type='submit' value='Send' />
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
