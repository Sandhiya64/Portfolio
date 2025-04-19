import React from 'react';

export const Hero = () => {
  return (
    <header style={{
      textAlign: "center",
      padding: "4rem 1rem",
      backgroundColor: "var(--bg-main)"
    }}>
      <h1 style={{
        fontSize: "3rem",
        color: "var(--primary)",
        marginBottom: "1rem"
      }}>Sandhiya – Engineer. Innovator. Future CEO.</h1>
      <p style={{
        fontSize: "1.2rem",
        color: "var(--text-muted)",
        marginBottom: "2rem"
      }}>
        Building scalable solutions at the intersection of code, AI, and biotech.
      </p>
      <a href="#contact" className="cta-button" style={{
        backgroundColor: "var(--primary)",
        color: "#fff",
        padding: "0.75rem 1.5rem",
        borderRadius: "0.5rem",
        textDecoration: "none",
        fontWeight: "bold"
      }}>
        Let’s Work Together
      </a>
      <nav style={{
        marginTop: "3rem",
        backgroundColor: "var(--bg-darker)",
        padding: "1rem 0"
      }}>
        <ul style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          listStyle: "none",
          padding: 0,
          margin: 0
        }}>
          <li><a href="#about" style={{ color: "var(--text-muted)", textDecoration: "none" }}>About</a></li>
          <li><a href="#skills" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Skills</a></li>
          <li><a href="#services" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Services</a></li>
          <li><a href="#projects" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Projects</a></li>
          <li><a href="#contact" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

