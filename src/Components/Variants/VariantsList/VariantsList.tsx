import React from 'react';
import VariantsItem from '../VariantsItem/VariantsItem';
import { i18nContext } from '../../App';

const VariantsList = () => {
  const _i18nContext = React.useContext(i18nContext);
  const t = _i18nContext?.t;

  return (
    <article className="variants__wrapper">
      <ul className="variants__list">
        <li className="variants__list--item" key={1}>
          <VariantsItem
            title={t('variantsFirstItemTitle')}
            img="/img/variants-image-1.png"
            price="1650 грн"
            id={1}
          />
        </li>{' '}
        <li className="variants__list--item" key={2}>
          <VariantsItem
            title={t('variantsSecondItemTitle')}
            img="/img/variants-image-2.png"
            price="1950 грн"
            id={2}
          />
        </li>{' '}
        <li className="variants__list--item" key={3}>
          <VariantsItem
            title={t('variantsThirthtemTitle')}
            img="/img/variants-image-3.png"
            price="950 грн"
            id={3}
          />
        </li>{' '}
        <li className="variants__list--item" key={4}>
          <VariantsItem
            title={t('variantsFourthItemTitle')}
            img="/img/variants-image-4.png"
            price={t('variantsPrice_4')}
            id={4}
          />
        </li>
      </ul>
    </article>
  );
};

export default React.memo(VariantsList);
