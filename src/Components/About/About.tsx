import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section id="about" className="about">
      <article className="about__container">
        <div className="about__box">
          <h3 className="about__title ">
            <span>ХТО</span> <br />
            МИ
          </h3>
          <p className="about__text">
            Ми ті, хто пофарбує ваші деталі якісно та в обумовлений термін.
          </p>
          <p className="about__text">
            Ми знаємо, що таке якість – самі не раз повертали деталі
            підрядникам, саме тому тепер у нас є свій фарбувальний цех та
            великий верстатний парк.
          </p>
          <p className="about__text">
            Ми використовуємо лише якісні матеріали. Фарбування проводиться по
            палітрах RAL, NCS та інші.
          </p>
          <p className="about__text">
            Ми розуміємо, що дотримання термінів монтажу меблів - це ваше
            обличчя перед клієнтом, тому зробимо все можливе, щоб прискорити
            процес.
          </p>
          <p className="about__text">
            Ми знаємо, що іноді складно організувати оперативну доставку деталей
            на виробництво, тому ми готові зробити це для вас.
          </p>
          <p className="about__text">
            Ми просто хочемо, щоб ви прийшли до нас із новим замовленням 🙂
          </p>
        </div>
      </article>
    </section>
  );
};

export default React.memo(About);
