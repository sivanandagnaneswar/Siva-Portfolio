import React from "react";
import { Sparkles, Layers3, Zap, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "../styles/features.css";

const Features = () => {
 
  return (
    <section className="features-section" id="about">
      {/* =====================================
          BACKGROUND DECORATION
      ===================================== */}

      <div className="features-orb features-orb-one"></div>
      <div className="features-orb features-orb-two"></div>
      <div className="features-orb features-orb-three"></div>

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="features-header">
        <span className="section-label">WHAT I DO</span>

        <h2>
          Designing scalable solutions
          <span> for an intelligent future..</span>
        </h2>

        <p>
         Passionate about developing intelligent applications and innovative solutions through software, AI, and continuous learning.
        </p>
      </div>

      {/* =====================================
          FEATURES
      ===================================== */}

     
     
    </section>
  );
};

export default Features;
