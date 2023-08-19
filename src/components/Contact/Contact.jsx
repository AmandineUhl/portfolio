import { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';
import Modal from 'react-modal';
import React from 'react'

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8n87i5c', 'template_vy7e1i4', form.current, 'ypmjxGj2XYLGJdVsC')
      .then((result) => {
        console.log(result.text);
        setIsModalOpen(true); 
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    form.current.reset(); 
  };
        return (
            <div className='contact'>
                <h2>Formulaire de contact</h2>
          <form ref={form} onSubmit={sendEmail} id='contact'>
            <label>Nom</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input id='button' type="submit" value="Envoyer" />
          </form>
          <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel='Confirmation Modal'
        className="modal"
      >
        <button onClick={closeModal}>X</button>
        
        <h3>Message envoyé avec succès !</h3>
        
        
      </Modal>
          </div>
        );
      };
      
    

export default Contact
