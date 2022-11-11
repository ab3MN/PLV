import React from 'react';
import './LanguageButton.scss';
import { i18nContext } from '../../App';

const LanguageButton = () => {
  const _i18nContext = React.useContext(i18nContext);
  const [language, setLanguage] = React.useState('ua');

  const changeLanguage = (e: any) => {
    const lang = e.target.getAttribute('data-lang');
    setLanguage(lang);
    _i18nContext?._changeLanguage(lang);
  };

  React.useEffect(() => {
    const lang = localStorage.getItem('i18nextLng');
    lang && setLanguage(lang);
  }, []);

  return (
    <>
      <div
        className="lang-switcher"
        data-lang-1={language === 'ua' ? 'ua' : 'ru'}
        data-lang-2={language === 'ua' ? 'ru' : 'ua'}
      >
        {' '}
        <div className="lang-switcher--button">
          <div
            className="lang-switcher--button__first"
            data-lang={language === 'ua' ? 'ua' : 'ru'}
            onClick={changeLanguage}
          ></div>{' '}
          <div
            className="lang-switcher--button__second"
            data-lang={language === 'ua' ? 'ru' : 'ua'}
            onClick={changeLanguage}
          ></div>
        </div>
        <svg
          className="lang-switcher__svg"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 100 200"
        >
          <defs>
            <filter id="goo-effect" width="110%" height="215%">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo-effect"
              />
              <feBlend in="SourceGraphic" in2="goo-effect" />
            </filter>
          </defs>
          <g filter="url(#goo-effect)">
            <circle
              className="lang-switcher__svg-item"
              cx="50"
              cy="50"
              r="45"
            />
            <circle
              className="lang-switcher__svg-item js-moving"
              cx="50"
              cy="50"
              r="45"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default LanguageButton;
