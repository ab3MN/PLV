import React from 'react';
import Scroll from '../shared/Scroll/Scroll';
import './Home.scss';
import { i18nContext } from '../App';

const Home = () => {
  const _i18nContext = React.useContext(i18nContext);

  const t = _i18nContext?.t;
  return (
    <section id="home" className="home">
      <video autoPlay loop muted className="home__video">
        <source src="/video/home.mp4" type="video/mp4" />
      </video>
      <Scroll to="variants" />

      <article className="home__container">
        <h1 className="home__title">
          {t('homeTitle_1')} <br />
          <span>{t('homeTitle_2')}</span>
          <br />
          {t('homeTitle_3')}
        </h1>
        <p className="home__description">{t('homeDescription')} </p>
      </article>
    </section>
  );
};

export default React.memo(Home);
