import React, { useEffect } from 'react';
import Logo from '../shared/svg/Logo';
import './Navbar.scss';
import { Link } from 'react-scroll';
import LanguageButton from '../shared/LanguageButton/LanguageButton';
import { i18nContext } from '../App';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  /* ==================== CONTEXT ==================== */
  const _i18nContext = React.useContext(i18nContext);
  const t = _i18nContext?.t;

  /* ==================== BURGER ==================== */
  const [click, setClick] = React.useState(false);

  /* ==================== SCROLL ==================== */
  const [scrollpos, setScrollpos] = React.useState(0);
  const cnahgeNav = React.useCallback(
    () =>
      scrollpos > 1
        ? undefined
        : window.addEventListener('scroll', () => setScrollpos(window.scrollY)),
    [scrollpos],
  );
  useEffect(() => {
    cnahgeNav();
  }, [cnahgeNav]);

  return (
    <header className={scrollpos >= 1 ? 'header header__fixed' : 'header '}>
      <nav className="nav ">
        <Link to="/" className="nav__logo">
          {window.innerWidth <= 765 ? (
            <Logo scrollpos={1} />
          ) : (
            <Logo scrollpos={scrollpos} />
          )}
        </Link>
        {window.innerWidth <= 765 && (
          <button
            className="nav__burger"
            onClick={() => setClick(!click)}
            style={{ color: 'rgb(255, 255, 255)' }}
          >
            <MenuIcon fontSize="large" />
          </button>
        )}
        <ul className="nav__menu" onClick={() => setClick(false)}>
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
          </li>{' '}
        </ul>
        {window.innerWidth >= 1000 && (
          <div>
            <LanguageButton />
          </div>
        )}
      </nav>
    </header>
  );
};

export default React.memo(Navbar);
