import React, { useContext } from 'react';
import { SliderContext } from '../../Slider';

const Dot = ({ number = 0 }) => {
  const _SliderContext = useContext(SliderContext);
  const goToSlide = _SliderContext?.goToSlide;
  const slideNumber = _SliderContext?.slideNumber;

  return (
    <div
      className={`dot ${slideNumber === number ? 'selected' : ''}`}
      onClick={() => goToSlide && goToSlide(number)}
    />
  );
};

export default Dot;
