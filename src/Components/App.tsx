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

const asyncCall = () => new Promise<void>(res => setTimeout(() => res()));

const App = () => {
  const { t, i18n } = useTranslation();

  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    asyncCall().then(() => {
      setLoading(false);
    });
  });

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const _changeLanguage = React.useCallback(changeLanguage, [i18n]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <i18nContext.Provider value={{ _changeLanguage, t }}>
          <Navbar />
          <main>
            <Home />
            <Variants />
            <About />
            <Contact />
          </main>
        </i18nContext.Provider>
      )}
    </>
  );
};

export default App;
