import React from 'react';

const VariantsInfo = () => (
  <article className="variants__box">
    <div className="variants__box--info">
      <h2 className="variants__box--title heading-h1">
        <span>ВАРТІСТЬ</span>
        <br />І ВАРІАНТИ РОБІТ
      </h2>
      <button className="variants__box--button">
        <a
          href="#contact"
          className="button-ghost smooth"
          title="Отримати детальний прорахунок"
        >
          ОТРИМАТИ ДЕТАЛЬНИЙ ПРОРАХУНОК
        </a>
      </button>
    </div>
  </article>
);

export default React.memo(VariantsInfo);
