import React from 'react';

const Projects = () => (
  <section className="projects" id="projects">
    <h2>Projects</h2>
    <div className="project-card">
      <img src="/icons/code.svg" alt="Project Icon" />
      <div>
        <h3>TreeVisualizer: BST & AVL Tree Analysis Tool</h3>
        <ul>
          <li>Developed a web application with Next.js, React, and TypeScript to visualize and analyze Binary Search Tree and AVL tree data structures.</li>
          <li>Implemented dynamic SVG rendering of tree structures and comparative data plots using Recharts.</li>
          <li>Engineered logic to calculate and report on algorithmic efficiency, including operational frequency and tree height.</li>
          <li>Built a modern, responsive UI for user input and data analysis using Tailwind CSS and ShadCN.</li>
          <li><a href="#">GitHub: AVL-Tree-Visualizer Project</a></li>
        </ul>
      </div>
    </div>
    <div className="project-card">
      <img src="/icons/ui.svg" alt="Project Icon" />
      <div>
        <h3>A* Pathfinder Visualizer</h3>
        <ul>
          <li>Built an interactive A* pathfinding visualizer using Next.js, React, and TypeScript to demonstrate the algorithm's core mechanics.</li>
          <li>Engineered two dynamic, custom-rendered SVG components: a main node graph and a unique exploration tree that traces the algorithm's decision process.</li>
          <li>Implemented a rich UI with step-by-step simulation controls and features for users to create and test their own custom graphs.</li>
          <li>Developed a custom A* algorithm from scratch, with detailed state tracking to enable accurate, frame-by-frame visualization.</li>
          <li><a href="#">GitHub: A-Star-Visualization Project</a></li>
        </ul>
      </div>
    </div>
    <div className="project-card">
      <img src="/icons/web.svg" alt="Project Icon" />
      <div>
        <h3>Audio Player – Software Design Patterns</h3>
        <ul>
          <li>Built a modular audio player using Strategy, Façade & Controller, Factory Method, Observer, Singleton and Adapter patterns for clean, scalable architecture.</li>
          <li>Enabled flexible playback modes and audio states with encapsulated, maintainable logic.</li>
          <li><a href="#">GitHub: AudioPlayer_DP Project</a></li>
        </ul>
      </div>
    </div>
  </section>
);

export default Projects;
