import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';
import React from 'react';

function Contact() {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8n87i5c', 'template_vy7e1i4', form.current, 'ypmjxGj2XYLGJdVsC')
      .then((result) => {
        console.log(result.text);
        openPopup();
        form.current.reset(); 
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  const openPopup = () => {
    const popupWindow = window.open('', '_blank', 'width=400,height=300');
    popupWindow.document.open();
    popupWindow.document.write(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Message envoyé</title>
          <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

          body {
            font-family: 'Roboto', sans-serif;
            text-align: center;
            padding: 20px;
            background-color: #f5f5f5;
          }
          h3 {
            color: #009688;
            margin-bottom: 20px;
          }
          button {
            background-color: #009688;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            border-radius: 4px;
            transition: background-color 0.3s ease;
          }
          button:hover {
            background-color: #00796b;
          }
        </style>
        </head>
        <body>
          <h3>Message envoyé avec succès !</h3>
          <button onclick="window.close()">Fermer</button>
        </body>
      </html>
      `
    );
    popupWindow.document.close();
  };

  return (
    <div className='contact'>
      <h2>Formulaire de contact</h2>
      <form ref={form} onSubmit={sendEmail} id='contact'>
        <label htmlFor='user_name'>Nom</label>
        <input type='text' id='user_name' name='user_name' />
        <label htmlFor='user_email'>Email</label>
        <input type='email' id='user_email' name='user_email' />
        <label htmlFor='message'>Message</label>
        <textarea id='message' name='message' />
        <input id='button' type='submit' value='Envoyer' />
      </form>
    </div>
  );
}

export default Contact;
