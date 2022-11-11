import React, { useEffect } from 'react';
import Logo from '../shared/svg/Logo';
import './Navbar.scss';
import {
  Link,
  // animateScroll as scroll
} from 'react-scroll';
import LanguageButton from '../shared/LanguageButton/LanguageButton';
import { i18nContext } from '../App';

const Navbar = () => {
  const [scrollpos, setScrollpos] = React.useState(0);
  const _i18nContext = React.useContext(i18nContext);

  const t = _i18nContext?.t;

  useEffect(() => {
    if (scrollpos > 1) {
      return;
    }

    window.addEventListener('scroll', () => setScrollpos(window.scrollY));
  });

  return (
    <header className={scrollpos >= 1 ? 'header header__fixed' : 'header '}>
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
              {t('navHome')}
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
              {t('navVar')}
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
              {t('navAbout')}
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
              {t('navContact')}
            </Link>
          </li>
        </ul>{' '}
        <div>
          {' '}
          <LanguageButton />
        </div>
      </nav>
    </header>
  );
};

export default React.memo(Navbar);
