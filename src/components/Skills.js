import React from 'react';

const Skills = () => (
  <section className="skills" id="skills">
    {/* Modern SVG Divider */}
    <svg className="divider" width="100%" height="32" viewBox="0 0 1200 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: '32px 0'}}>
      <path d="M0,16 Q300,32 600,16 T1200,16" stroke="#00CFFF" strokeWidth="4" fill="none"/>
    </svg>
    <h2>My Skills</h2>
    <div className="skills-list">
      <div className="skill-bar">
        <span>Java</span>
        <div className="bar"><div className="progress" style={{width: '90%'}}></div></div>
      </div>
      <div className="skill-bar">
        <span>Python</span>
        <div className="bar"><div className="progress" style={{width: '85%'}}></div></div>
      </div>
      <div className="skill-bar">
        <span>C#</span>
        <div className="bar"><div className="progress" style={{width: '80%'}}></div></div>
      </div>
      <div className="skill-bar">
        <span>HTML/CSS</span>
        <div className="bar"><div className="progress" style={{width: '80%'}}></div></div>
      </div>
      <div className="skill-bar">
        <span>JavaScript</span>
        <div className="bar"><div className="progress" style={{width: '70%'}}></div></div>
      </div>
      <div className="skill-bar">
        <span>SQL</span>
        <div className="bar"><div className="progress" style={{width: '65%'}}></div></div>
      </div>
      <div className="skill-bar">
        <span>Git/GitHub</span>
        <div className="bar"><div className="progress" style={{width: '85%'}}></div></div>
      </div>
    </div>
  </section>
);

export default Skills;
