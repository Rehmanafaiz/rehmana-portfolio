

import React, { useEffect, useState } from 'react';

const typingText = 'Frontend Developer | Computer Science Student';

const Hero = () => {
  const [typed, setTyped] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let current = 0;
    setTyped('');
    setShowCursor(true);
    const type = () => {
      if (current <= typingText.length) {
        setTyped(typingText.slice(0, current));
        current++;
        setTimeout(type, 38);
      } else {
        setShowCursor(false);
      }
    };
    type();
    // Cleanup in case component unmounts
    return () => setShowCursor(false);
  }, []);

  return (
    <section className="hero" id="hero">
      <h1 className="hero-animate">Rehmana Faiz</h1>
      <h2 style={{minHeight: 38}}>
        {typed}
        {showCursor && <span style={{color: '#29b6f6'}}>|</span>}
      </h2>
      <p>Welcome to my professional portfolio website!</p>
      <a href="#contact" className="btn-primary">Get In Touch</a>
      <a href="/assets/Resume.pdf" className="btn-secondary" download>Download CV</a>
    </section>
  );
};

export default Hero;
