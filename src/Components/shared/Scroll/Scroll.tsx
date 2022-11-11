import React from 'react';
import './Scroll.scss';
import { Link } from 'react-scroll';

const Scroll = ({ to = '' }) => (
  <Link
    to={to}
    className="scroll smooth"
    spy={true}
    smooth={true}
    offset={-10}
    duration={500}
  >
    <div className="scroll--item"></div>
    <div className="scroll--item"></div>
  </Link>
);

export default React.memo(Scroll);
