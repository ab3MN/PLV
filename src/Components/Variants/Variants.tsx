import React, { createContext } from 'react';

import './Variants.scss';
import VariantsInfo from './VariantsInfo/VariantsInfo';
import VariantsList from './VariantsList/VariantsList';

import imagesXL from '../../db/variants/imagesXL.json';
import imagesL from '../../db/variants/imagesL.json';
import imagesM from '../../db/variants/imagesM.json';
import imagesS from '../../db/variants/imagesS.json';

import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';

import Modal from '../shared/Modal/Modal';
import Slider from '../shared/Slider/Slider';

interface IVariantContext {
  _handleOpenModal: (id: number) => void;
}

const style = {
  color: 'rgb(240, 248, 255)',
  marginRight: 1.5,
  '&:hover': {
    color: 'rgb(3, 233, 244)',
  },
};

export const VariantContext = createContext<IVariantContext | null>(null);

const Variants = () => {
  /* ==================== MODAL ==================== */
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = (id: number) => {
    setModalOpen(true);
    setImagesCount(id);
  };

  const _handleOpenModal = React.useCallback(handleOpenModal, []);
  const handleCloseModal = () => setModalOpen(false);

  /* ==================== IMAGES ==================== */

  const [imagesCount, setImagesCount] = React.useState<number>(1);
  const [images, setImages] = React.useState(imagesXL);

  React.useEffect(() => {
    const width = window.innerWidth;
    if (width <= 1000 && width > 765) {
      setImages(imagesL);
    } else if (width <= 765 && width > 450) {
      setImages(imagesM);
    } else if (width < 450) {
      setImages(imagesS);
    }
  }, []);

  const img = images.filter(el => el.id === imagesCount)[0]?.data;

  return (
    <section className="variants" id="variants section">
      <VariantsInfo />
      <VariantContext.Provider value={{ _handleOpenModal }}>
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
          {' '}
          <IconButton
            sx={style}
            id="slider__close--btn"
            onClick={handleCloseModal}
          >
            <CancelIcon fontSize="large" sx={{ color: 'rgb(72, 185, 193)' }} />
          </IconButton>
          <Slider images={img} />
        </Modal>
      )}
    </section>
  );
};

export default React.memo(Variants);
