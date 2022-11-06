import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import './Contact.scss';
import ContactMap from './ContactMap/ContactMap';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__title ">ЗВ'ЯЗАТИСЯ</h2>
      <div className="contact__container">
        <ContactForm />
        <ContactMap />
      </div>
    </section>
  );
};

export default React.memo(Contact);
