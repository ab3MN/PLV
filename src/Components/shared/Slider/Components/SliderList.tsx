import React, { useContext } from 'react';
import Slide from './Slide';
import { SliderContext } from '../Slider';

const SlidesList = () => {
  const _SliderContext = useContext(SliderContext);
  const slideNumber = _SliderContext?.slideNumber;

  const items = _SliderContext?.items;

  return (
    <div
      className="slide-list"
      style={{ transform: `translateX(-${slideNumber && slideNumber * 100}%)` }}
    >
      {items?.map((slide, index) => (
        <Slide key={index} data={slide} />
      ))}
    </div>
  );
};

export default SlidesList;
