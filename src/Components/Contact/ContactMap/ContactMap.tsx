import React from 'react';
import './ContactMap.scss';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Modal from '../../shared/Modal/Modal';
import Telegram from '../../shared/svg/Telegram';
import Viber from '../../shared/svg/Viber';
import Call from '../../shared/svg/Call';

const ContactMap = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = () => setModalOpen(true);

  const handleCloseModal = () => setModalOpen(false);

  return (
    <article className="contact__map">
      <h2 className="contact__map--title">Контакти</h2>
      <div className="contact__map--box">
        <iframe
          title="Our cordinate"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10173.147356618369!2d30.5774641!3d50.3984917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37bec9a970dd961!2sPLV%20Systems!5e0!3m2!1sru!2sua!4v1652990719386!5m2!1sru!2sua"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <address className="contact__map--info">
        <a
          className="contact__map--adress"
          href="https://goo.gl/maps/WCEaDTBS2B5cpZHX7"
          target="_blank"
          rel="noreferrer"
        >
          <PlaceIcon fontSize="medium" sx={{ paddingRight: '10px' }} />
          01013, Україна, м. Київ, Будіндустрії, 7
        </a>
        <button onClick={handleOpenModal}>
          <PhoneIcon fontSize="medium" sx={{ paddingRight: '10px' }} />
          +380 68 283 57 03
        </button>{' '}
        <a
          className="contact__map--adress"
          href="mailto:a.tereshchenko@plv.com.ua"
          target="_blank"
          rel="noreferrer"
          style={{ paddingLeft: '3px' }}
        >
          <MailOutlineIcon fontSize="medium" sx={{ paddingRight: '10px' }} />
          a.tereshchenko@plv.com.ua
        </a>
      </address>
      {isModalOpen && (
        <Modal
          onClose={handleCloseModal}
          style={{
            width: '150px',
            height: '50px',
            marginTop: '390px',
            marginLeft: '250px',
          }}
          dropStyle={{
            position: 'absolute',
            width: '98.7vw',
            height: '103.7vh',
            background: 'none',
            cursor: 'pointer',
          }}
        >
          <div className="contact__map--messengers">
            <Telegram />
            <Viber />
            <Call />
          </div>
        </Modal>
      )}
    </article>
  );
};

export default React.memo(ContactMap);
