import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import './Contact.scss';
import ContactMap from './ContactMap/ContactMap';
import { i18nContext } from '../App';

const Contact = () => {
  const _i18nContext = React.useContext(i18nContext);
  const t = _i18nContext?.t;
  return (
    <section id="contact section" className="contact">
      <h2 className="contact__title ">{t('contactTitle')}</h2>
      <div className="contact__container">
        <ContactForm />
        <ContactMap />
      </div>
    </section>
  );
};

export default React.memo(Contact);
