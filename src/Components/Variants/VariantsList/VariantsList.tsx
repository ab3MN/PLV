import React from 'react';
import variants from '../../../db/variants.json';
import VariantsItem from '../VariantsItem/VariantsItem';

const VariantsList = () => (
  <article className="variants__wrapper">
    <ul className="variants__list">
      {variants.map(el => (
        <li className="variants__list--item" key={el.id}>
          <VariantsItem
            title={el.title}
            img={el.img}
            price={el.price}
            id={el.id}
          />
        </li>
      ))}
    </ul>
  </article>
);

export default React.memo(VariantsList);
