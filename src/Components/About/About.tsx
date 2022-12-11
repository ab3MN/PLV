import React from 'react';
import { i18nContext } from '../App';
import './About.scss';

const About = () => {
  const _i18nContext = React.useContext(i18nContext);
  const t = _i18nContext?.t;

  return (
    <section id="about section" className="about">
      <article className="about__container">
        <div className="about__box">
          <h3 className="about__title ">
            <span>{t('aboutTitle')}</span> <br />
            {t('aboutTitleSpan')}{' '}
          </h3>
          <p className="about__text">{t('aboutText_1')} </p>
          <p className="about__text">{t('aboutText_2')} </p>
          <p className="about__text">{t('aboutText_3')} </p>
          <p className="about__text">{t('aboutText_4')} </p>
          <p className="about__text">{t('aboutText_5')} </p>
          <p className="about__text">{t('aboutText_6')} </p>
        </div>
      </article>
    </section>
  );
};

export default React.memo(About);
