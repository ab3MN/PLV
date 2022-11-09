import React, { useEffect } from 'react';
import Logo from '../shared/svg/Logo';
import './Navbar.scss';
import { Link, animateScroll as scroll } from 'react-scroll';
const Navbar = () => {
  const [scrollpos, setScrollpos] = React.useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollpos(window.scrollY));
  });

  return (
    <header className={scrollpos >= 1 ? 'header header__fixed' : 'header '}>
      {' '}
      <nav className="nav ">
        <Link to="/" className="nav__logo">
          <Logo scrollpos={scrollpos} />
        </Link>

        <ul className="nav__menu">
          <li className="nav__item">
            <Link
              to="home"
              activeClass="nav__active"
              className="nav__link"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              головна
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="variants"
              className="nav__link"
              activeClass="nav__active"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              варіанти фарбування
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="about"
              className="nav__link"
              activeClass="nav__active"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              хто ми
            </Link>
          </li>{' '}
          <li className="nav__item">
            <Link
              to="contact"
              className="nav__link"
              activeClass="nav__active"
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
            >
              зв'язатися
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(Navbar);
