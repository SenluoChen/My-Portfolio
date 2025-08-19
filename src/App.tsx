import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// ...existing code...
import Posts from "./components/Posts";
import { motion } from "framer-motion";
import "./css/app.css";




// ...existing code...


export default function App() {
  return (
    <>
  <Navbar />
  <main className="app-main">
  <div className="app-container">
  <Hero />

  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <About />
  </motion.section>

  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <Projects />
  </motion.section>

  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    viewport={{ once: true }}
    style={{ marginTop: 64, marginBottom: 64 }}
  >
    <Posts />
  </motion.section>

  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    viewport={{ once: true }}
    style={{ marginTop: 0 }}
  >
    <Contact />
  </motion.section>
</div>
      </main>
      <Footer />
    </>
  );
}
