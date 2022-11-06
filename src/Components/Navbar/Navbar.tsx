import React, { useEffect } from 'react';
import Logo from '../shared/svg/Logo';
import './Navbar.scss';

const Navbar = () => {
  const [scrollpos, setScrollpos] = React.useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollpos(window.scrollY));
  });

  return (
    <header className={scrollpos >= 1 ? 'header header__fixed' : 'header '}>
      {' '}
      <nav className="nav ">
        <a href="/" className="nav__logo">
          <Logo scrollpos={scrollpos} />
        </a>

        <ul className="nav__menu">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              головна
            </a>
          </li>
          <li className="nav__item">
            <a href="#variants" className="nav__link">
              варіанти фарбування
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              хто ми
            </a>
          </li>{' '}
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              зв'язатися
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(Navbar);
