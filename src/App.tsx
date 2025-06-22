import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Background from './components/Background';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      <SEO />
      <AnimatePresence>
        {loading ? (
          <Loader key="loader" />
        ) : (
          <div className="relative">
            <Background />
            <Navbar />
            <main className="relative z-10">
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Certificates />
              <Contact />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;