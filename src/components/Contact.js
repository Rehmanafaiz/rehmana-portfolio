import React from 'react';

const Contact = () => (
  <section className="contact" id="contact">
    {/* Modern SVG Divider */}
    <svg className="divider" width="100%" height="32" viewBox="0 0 1200 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '32px 0'}}>
      <path d="M0,16 Q300,32 600,16 T1200,16" stroke="#00CFFF" strokeWidth="4" fill="none"/>
    </svg>
    <h2>Get In Touch</h2>
    <form className="contact-form">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Write your message..." required></textarea>
      <button type="submit">Send Message</button>
    </form>
    <div className="contact-info">
      <p><strong>Email:</strong> <a href="mailto:rehmanafaiz0@gmail.com">rehmanafaiz0@gmail.com</a></p>
      <p><strong>Phone:</strong> <a href="tel:+923412762897">+92 341 2762897</a></p>
      <p><strong>Location:</strong> Karachi, Pakistan</p>
      <div style={{marginTop: '1.2rem', display: 'flex', gap: '1.2rem', alignItems: 'center'}}>
        <a href="#" title="LinkedIn" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width="32" height="32" />
        </a>
        <a href="#" title="GitHub" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="32" height="32" />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
