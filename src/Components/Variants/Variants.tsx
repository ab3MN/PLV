import React, { createContext } from 'react';

import './Variants.scss';
import VariantsInfo from './VariantsInfo/VariantsInfo';
import VariantsList from './VariantsList/VariantsList';
import images from '../../db/variants/images.json';

import Modal from '../shared/Modal/Modal';
import Slider from '../shared/Slider/Slider';

interface IVariantContext {
  _handleOpenModal: (id: number) => void;
}

export const VariantContext = createContext<IVariantContext | null>(null);

const Variants = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [imagesCount, setImagesCount] = React.useState<number>(1);

  const handleOpenModal = (id: number) => {
    setModalOpen(true);
    setImagesCount(id);
  };
  const _handleOpenModal = React.useCallback(handleOpenModal, []);

  const handleCloseModal = () => setModalOpen(false);

  const img = images.filter(el => el.id === imagesCount)[0]?.data;

  return (
    <section className="variants" id="variants">
      <VariantsInfo />
      <VariantContext.Provider value={{ _handleOpenModal }}>
        {' '}
        <VariantsList />
      </VariantContext.Provider>
      {isModalOpen && (
        <Modal
          onClose={handleCloseModal}
          dropStyle={{
            background: 'none',
            width: '99.1vw',
          }}
        >
          <Slider images={img} />
        </Modal>
      )}
    </section>
  );
};

export default React.memo(Variants);
