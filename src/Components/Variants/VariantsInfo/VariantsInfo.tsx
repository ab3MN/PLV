import React from 'react';
import { i18nContext } from '../../App';

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
          <a
            href="#contact"
            className="button-ghost smooth"
            title="Отримати детальний прорахунок"
          >
            {t('variantsButton').toUpperCase()}{' '}
          </a>
        </button>
      </div>
    </article>
  );
};

export default React.memo(VariantsInfo);
