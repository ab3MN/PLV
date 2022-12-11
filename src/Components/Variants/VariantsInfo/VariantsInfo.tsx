import React from 'react';
import { i18nContext } from '../../App';
import { Link } from 'react-scroll';

const VariantsInfo = () => {
  const _i18nContext = React.useContext(i18nContext);
  const t = _i18nContext?.t;
  return (
    <article className="variants__box">
      <div className="variants__box--info">
        <h2 className="variants__box--title heading-h1">
          <span>{t('variantsTitle').toUpperCase()}</span>
          <br />
          {t('variantsTitleSpan').toUpperCase()}
        </h2>
        <button className="variants__box--button">
          <Link
            to="contact"
            className="button-ghost smooth"
            title="Отримати детальний прорахунок"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            {t('variantsButton').toUpperCase()}{' '}
          </Link>
        </button>
      </div>
    </article>
  );
};

export default React.memo(VariantsInfo);
