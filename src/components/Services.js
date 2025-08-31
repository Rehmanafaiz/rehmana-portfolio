import React from 'react';

const Services = () => (
  <section className="services" id="services">
    <h2>My Services</h2>
    <div className="service-list">
      <div className="service-card">
        <img src="/icons/code.svg" alt="Clean Code Icon" />
        <div>
          <h3>Clean Code</h3>
          <p>Writing code that is easy to read, understand, and maintain. Well-organized, consistent, and error-free for long-term project success.</p>
        </div>
      </div>
      <div className="service-card">
        <img src="/icons/ui.svg" alt="UI Icon" />
        <div>
          <h3>User Interface</h3>
          <p>Designing visually appealing and intuitive interfaces for a seamless user experience.</p>
        </div>
      </div>
      <div className="service-card">
        <img src="/icons/ux.svg" alt="UX Icon" />
        <div>
          <h3>User Experience</h3>
          <p>Creating engaging and user-friendly digital products that maximize satisfaction and usability.</p>
        </div>
      </div>
      <div className="service-card">
        <img src="/icons/web.svg" alt="Web Dev Icon" />
        <div>
          <h3>Web Development</h3>
          <p>Building responsive, modern websites and web applications tailored to your needs.</p>
        </div>
      </div>
      <div className="service-card">
        <img src="/icons/api.svg" alt="API Icon" />
        <div>
          <h3>Web APIs</h3>
          <p>Developing robust and efficient APIs for seamless integration and data exchange.</p>
        </div>
      </div>
      <div className="service-card">
        <img src="/icons/support.svg" alt="Support Icon" />
        <div>
          <h3>Fast Support</h3>
          <p>Providing quick and reliable support to keep your projects running smoothly.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
