import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import posts from "./components/Posts";
import Posts from "./components/Posts";
import { motion } from "framer-motion";
import "./css/app.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="app-main">
        <div className="app-container">
          <section id="hero" className="section-slide">
            <Hero />
          </section>
          <section id="about" className="section-slide">
            <About />
          </section>
          <section id="projects" className="section-slide">
            <Projects />
          </section>
          <section id="contact" className="section-slide">
            <Contact />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
