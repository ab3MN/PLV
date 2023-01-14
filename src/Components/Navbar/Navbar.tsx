import React, { useEffect } from 'react';
import Logo from '../shared/svg/Logo';
import './Navbar.scss';
import { Link } from 'react-scroll';
import LanguageButton from '../shared/LanguageButton/LanguageButton';
import { i18nContext } from '../App';
import MenuIcon from '@mui/icons-material/Menu';
const navContext = [
  { to: 'home', name: 'navHome', id: 1 },
  { to: 'variants', name: 'navVar', id: 2 },
  { to: 'about', name: 'navAbout', id: 3 },
  { to: 'contact', name: 'navContact', id: 4 },
];

const Navbar = () => {
  /* ==================== CONTEXT ==================== */
  const _i18nContext = React.useContext(i18nContext);
  const t = _i18nContext?.t;

  /* ==================== BURGER ==================== */
  const [isMenuActive, setMenuActive] = React.useState(false);

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

  const backdropRef: React.RefObject<HTMLInputElement> = React.useRef(null);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) =>
    backdropRef.current && e.target !== backdropRef.current
      ? undefined
      : setMenuActive(false);

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
            onClick={() => setMenuActive(!isMenuActive)}
            style={{
              color: 'rgb(255, 255, 255)',
              marginRight: '10px',
              display: isMenuActive ? 'none' : 'block',
            }}
          >
            <MenuIcon fontSize={scrollpos > 1 ? 'medium' : 'large'} />
          </button>
        )}

        {window.innerWidth <= 765 ? (
          <div
            className={
              isMenuActive
                ? 'nav__menu--backdrop active'
                : 'nav__menu--backdrop '
            }
            ref={backdropRef}
            onClick={handleBackdropClick}
          >
            <ul className={isMenuActive ? 'nav__menu--active' : 'nav__menu'}>
              {navContext.map(el => (
                <li key={el.id}>
                  <Link
                    to={el.to}
                    activeClass="nav__active"
                    className="nav__link"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}
                    onClick={() => {
                      setMenuActive(false);
                    }}
                  >
                    {t(el.name)}
                  </Link>
                </li>
              ))}{' '}
              {isMenuActive && (
                <div className="nav__menu--language">
                  <button
                    type="button"
                    onClick={() => _i18nContext?._changeLanguage('ua')}
                  >
                    Укр
                  </button>
                  <button
                    type="button"
                    onClick={() => _i18nContext?._changeLanguage('ru')}
                  >
                    РУ
                  </button>
                </div>
              )}
            </ul>
          </div>
        ) : (
          <ul className={isMenuActive ? 'nav__menu--active' : 'nav__menu'}>
            {navContext.map(el => (
              <li key={el.id}>
                <Link
                  to={el.to}
                  activeClass="nav__active"
                  className="nav__link"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
                  onClick={() => {
                    setMenuActive(false);
                  }}
                >
                  {t(el.name)}
                </Link>
              </li>
            ))}{' '}
            {isMenuActive && (
              <div className="nav__menu--language">
                <button
                  type="button"
                  onClick={() => _i18nContext?._changeLanguage('ua')}
                >
                  Укр
                </button>
                <button
                  type="button"
                  onClick={() => _i18nContext?._changeLanguage('ru')}
                >
                  РУ
                </button>
              </div>
            )}
          </ul>
        )}

        {window.innerWidth >= 1000 && (
          <div>
            <LanguageButton scrollpos={scrollpos} />
          </div>
        )}
      </nav>
    </header>
  );
};

export default React.memo(Navbar);
