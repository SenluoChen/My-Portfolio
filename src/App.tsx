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




const container: React.CSSProperties = {
  maxWidth: 1080,        // 稍微窄一點，閱讀更好
  margin: "0 auto",
  padding: "0 32px",
  display: "flex",
  flexDirection: "column",
  gap: 15,              // 每個 Section 之間的距離
};


export default function App() {
  return (
    <>
  <Navbar />
      <main
        style={{
          background: "linear-gradient(180deg,#0b1220 0%, #101a2d 60%, #0b1220 100%)",
          backgroundSize: "400% 400%",
animation: "gradient 15s ease infinite",
          color: "#dbe2ea", // 全域文字顏色微亮
          minHeight: "100vh",
          paddingBottom: 96,
          fontFamily:
            '"Inter","Noto Sans TC","PingFang TC","Microsoft JhengHei","Helvetica Neue",Arial,sans-serif',
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          fontSize: 16,          // 基準字級
          lineHeight: 1.75,      // 全域行高
          letterSpacing: 0.1,    // 輕微字距
        }}
      >
      <div style={container}>
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
  >
    <Posts />
  </motion.section>

  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    viewport={{ once: true }}
  >
    <Contact />
  </motion.section>
</div>
      </main>
      <Footer />
    </>
  );
}
