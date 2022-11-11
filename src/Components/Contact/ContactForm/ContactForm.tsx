import React from 'react';
import './ContactForm.scss';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { i18nContext } from '../../App';

const textFieldStyle = {
  input: {
    color: 'black',
    width: '417px',
  },
  label: {
    color: 'black',
  },
  '& label.Mui-focused': {
    color: 'rgb(72, 185, 193)',
  },
  [`& fieldset`]: {
    borderRadius: 2,
  },
};
const textAreaStyle = {
  width: '395px',
  outline: 'none',
  borderRadius: '10px',
  border: '1px solid rgba(0, 0, 0, 0.23)',
  fontSize: '16px',
  padding: '12px 24px',
};

const ContactForm = () => {
  const _i18nContext = React.useContext(i18nContext);

  const t = _i18nContext?.t;
  const [contact, setContact] = React.useState({
    email: '',
    name: '',
    phone: '',
    text: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>): void =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const _handleChange = React.useCallback(handleChange, [contact]);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(contact);
  };

  return (
    <form
      className="contact__form"
      onChange={_handleChange}
      onSubmit={handleSubmit}
    >
      <h2 className="contact__form--title">{t('contactFormTitle')}</h2>
      <Box className="contact--editor__box">
        <TextField
          required
          id="outlined-required"
          label={t('contactFormName')}
          name="name"
          sx={textFieldStyle}
        />{' '}
      </Box>{' '}
      <Box className="contact--editor__box">
        <TextField
          required
          id="outlined-required"
          label="Email"
          name="email"
          sx={textFieldStyle}
        />{' '}
      </Box>{' '}
      <Box className="contact--editor__box">
        <TextField
          required
          id="outlined-required"
          label={t('contactFormPhone')}
          sx={textFieldStyle}
          name="phone"
        />{' '}
      </Box>{' '}
      <Box>
        {' '}
        <TextareaAutosize
          className="contact__form--textArea"
          placeholder={t('contactFormArea')}
          minRows={8}
          maxRows={Infinity}
          style={{ ...textAreaStyle, resize: 'none' }}
          name="text"
        />
      </Box>
      <button className="contact__form--button" type="submit">
        {t('contactFormButton')}
      </button>
    </form>
  );
};

export default React.memo(ContactForm);