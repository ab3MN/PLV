import React, { createContext } from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Variants from './Variants/Variants';
import { useTranslation } from 'react-i18next';
import Loader from './shared/Loader/Loader';

interface I18nContext {
  _changeLanguage: (lng: string) => void | undefined;
  t: any;
}

export const i18nContext = createContext<I18nContext | null>(null);

const App = () => {
  const { t, i18n, ready } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const _changeLanguage = React.useCallback(changeLanguage, [i18n]);

  return (
    <>
      {ready ? (
        <i18nContext.Provider value={{ _changeLanguage, t }}>
          <Navbar />
          <main>
            <Home />
            <Variants />
            <About />
            <Contact />
          </main>
        </i18nContext.Provider>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default App;
