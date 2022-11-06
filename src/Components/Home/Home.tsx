import React from 'react';
import Scroll from '../shared/Scroll/Scroll';
import './Home.scss';

const Home = () => {
  return (
    <section id="home" className="home">
      <video autoPlay loop muted className="home__video">
        <source src="/video/home.mp4" type="video/mp4" />
      </video>
      <Scroll to="#variants" />

      <article className="home__container">
        <h1 className="home__title">
          Якісне <br />
          <span>фарбування</span>
          <br />
          мдф,шпону
        </h1>
        <p className="home__description">
          Виготовлення стінових 3D панелей, фасадів будь-якої складності
        </p>
      </article>
    </section>
  );
};

export default React.memo(Home);
