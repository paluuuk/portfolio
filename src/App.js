import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Certificates from './components/Certificates';

function App() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = "teal";

  return (
    <>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Experience color={color} />
      <Projects color={color} /> 
      <Skills color={color} />
      <Certificates color={color} />
      <Contact color={color} />
      <Footer />
    </>
  );
}

export default App;
