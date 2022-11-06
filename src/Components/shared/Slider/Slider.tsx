import React, { useEffect, useState, createContext, FC } from 'react';

import Arrows from './Components/Controls/Arrows';
import Dots from './Components/Controls/Dots';

import SliderList from './Components/SliderList';
import './styles.scss';

interface ISliderContext {
  changeSlide?: (number: number) => void;
  goToSlide?: (number: number) => void;
  slideNumber: number;
  slidesCount: number;
  items: Array<any>;
}

export const SliderContext = createContext<ISliderContext | null>(null);

interface ISlider {
  width?: string;
  height?: string;
  autoPlay?: boolean;
  autoPlayTime?: number;
  images: Array<{ url: string; title: string }>;
}

const Slider: FC<ISlider> = ({
  width = '100%',
  height = '100%',
  autoPlay = false,
  autoPlayTime = 5000,
  images = [],
}) => {
  const [items] = useState(images);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState<null | number>(null);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
  };

  const _changeSlide = React.useCallback(changeSlide, [slide, items.length]);

  const goToSlide = (number = 0) => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.TouchEvent<HTMLDivElement>,
  ) => {
    e instanceof TouchEvent && setTouchPosition(e.touches[0].clientX);
    e instanceof MouseEvent && setTouchPosition(e.clientX);
  };

  const handleTouchMove = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.TouchEvent<HTMLDivElement>,
  ) => {
    if (touchPosition === null) {
      return;
    }
    let direction: number = 0;

    e instanceof TouchEvent &&
      (direction = touchPosition - e.touches[0].clientX);

    e instanceof MouseEvent && (direction = touchPosition - e.clientX);

    direction > 10 && changeSlide(1);

    direction < -10 && changeSlide(-1);

    setTouchPosition(null);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      _changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [items.length, slide, autoPlay, autoPlayTime, _changeSlide]);

  return (
    <div
      style={{ width, height }}
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        <Arrows />
        <SliderList />
        <Dots />
      </SliderContext.Provider>
    </div>
  );
};

export default Slider;
