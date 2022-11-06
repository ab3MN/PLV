import React from 'react';
import About from './About/About';
import './App.scss';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Variants from './Variants/Variants';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/900.css';

const App = () => (
  <>
    <Navbar />
    <main>
      <Home />
      <Variants />
      <About />
      <Contact />
    </main>
  </>
);

export default App;
