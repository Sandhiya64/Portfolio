import React, { useEffect } from 'react';
import './styles/App.css';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CoreSkills } from './components/CoreSkills';
import { Services } from './components/Services';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
// import { scrollAnimations } from './styles/scrollEffects';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="App">
      <Hero />
      <About />
      <CoreSkills />
      <Services />
      <WhyWorkWithMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

