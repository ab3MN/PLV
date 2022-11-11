import React from 'react';
// import SlideTitle from './SlideTitle';
import SlideImage from './SlideImage';

const Slide = ({ data: { url = '', title = '' } }) => (
  <div className="slide">
    <SlideImage src={url} alt={title} />
    {/* <SlideTitle title={title} /> */}
  </div>
);

export default Slide;
