import React from 'react';
import { VariantContext } from '../Variants';

const VariantsItem = ({ title = '', img = '', price = '', id = 0 }) => {
  const handleOpenModal = React.useContext(VariantContext)?._handleOpenModal;
  return (
    <>
      <h5 className="variants__list--title">{title}</h5>
      <div
        className="variants__list--img_box"
        onClick={() => handleOpenModal && handleOpenModal(id)}
      >
        <img src={img} alt="variants__photo" className="variants__list--img" />
      </div>
      <p className="variants__list--price">{price}</p>
    </>
  );
};

export default VariantsItem;
