import React from 'react';

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>J.A.R.V.I.S Lite - AI Assistant</h3>
        <p>Tech Stack: Python, OpenAI API, Zapier</p>
        <p>Built a smart assistant prototype that performs tasks like scheduling, messaging, and retrieving personalized info using natural language commands.</p>
      </div>
      <div className="project-card">
        <h3>DNA-Based Personalized Health Dashboard</h3>
        <p>Tech Stack: Python, Scikit-learn, Flask</p>
        <p>A data-driven health dashboard offering lifestyle recommendations using DNA datasets and machine learning - targeted at personalized wellness.</p>
      </div>
      <div className="project-card">
        <h3>Task Tracker CLI App</h3>
        <p>Tech Stack: Python (OOP, file handling)</p>
        <p>A terminal-based tool to manage daily tasks, with categories, due dates, and completion tracking.</p>
      </div>
    </section>
  );
};
