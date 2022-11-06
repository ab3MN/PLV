import React from 'react';
import './Scroll.scss';

const Scroll = ({ to = '' }) => (
  <a href={to} className="scroll smooth">
    <div className="scroll--item"></div>
    <div className="scroll--item"></div>
  </a>
);

export default React.memo(Scroll);
