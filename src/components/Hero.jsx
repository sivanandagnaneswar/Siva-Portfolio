
import React from "react";
import "../styles/hero.css";
import HeroModel from "./HeroModel";

const MARQUEE_WORDS = [
  "Design",
  "Technology",
  "Innovation",
  "Creativity",
  "Digital Experiences",
  "Project ideas",
  "Business Solutions"
];

const Hero = () => {
  return (
    <section className="hero" id="home">

      {/* Left Content */}

      <div className="hero-content">

        


        <h1 className="hero-title">
            Siva creates.

          <span> Technology inspires.</span>
        </h1>


        <p className="hero-description">
       I'm an aspiring Software Development Engineer and AI enthusiast who enjoys turning ideas into practical solutions through code and technology. With a passion for software development, artificial intelligence, and problem-solving, I love building applications that are intelligent, scalable, and designed to create real-world impact.
        </p>


       

      </div>


      {/* Right Side - 3D Model */}

      <div className="hero-model-container">

        <div className="model-glow"></div>

        <HeroModel />

      </div>


      {/* Marquee ribbon */}

     

    </section>
  );
};

export default Hero;
