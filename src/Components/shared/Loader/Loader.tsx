import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import './Loader.scss';

const Loader = () => (
  <div className="fallback">
    <div className="fallback">
      <ThreeCircles
        color="blue"
        height={110}
        width={110}
        ariaLabel="three-circles-rotating"
        outerCircleColor="blue"
        middleCircleColor="green"
        innerCircleColor="red"
      />
    </div>
  </div>
);

export default Loader;
