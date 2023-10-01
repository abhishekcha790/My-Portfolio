import './App.css';
import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skill/Skills";
// import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Project from "./components/project/Project";

function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      {/* <Qualification /> */}
      <Project />
      <Contact />
      
    </main>

    <Footer />
    <ScrollUp />
    </>
  );
}

export default App;
