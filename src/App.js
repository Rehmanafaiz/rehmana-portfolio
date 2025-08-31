import React, { useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Fade-in animation for sections
    const sections = document.querySelectorAll('section');
    const revealSection = () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          section.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealSection);
    revealSection();
    return () => window.removeEventListener('scroll', revealSection);
  }, []);

  useEffect(() => {
    // Highlight active nav link
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Hero />
      <About />
      <Education />
      <Projects />
      <Services />
      <Skills />
      <Contact />
    </div>
  );
}


export default App;
