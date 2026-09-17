import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";

import Intro from "./components/Intro";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Features from "./components/Features";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">

         <div key="portfolio">
            <Navbar />
            <Hero />
           
            <Features />
            <Projects />
       
            <Footer />
          </div>

      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;