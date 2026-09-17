import React from "react";
import { ArrowUpRight } from "lucide-react";

import "../styles/projects.css";
import paper1 from "../images/paper-1.jpg"
import paper2 from "../images/paper-2.jpeg"
import paper3 from "../images/paper-3.jpeg";
import paper4 from "../images/paper-4.jpeg";
import paper5 from "../images/paper-4.jpeg";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">

      {/* =====================================
          SECTION HEADER
      ===================================== */}

      <div className="projects-header">

        <div className="projects-badge">
          FEATURED RESEARCH
        </div>

        <h2>
          Research that
          <span> explores what's possible.</span>
        </h2>

        <p>
          Exploring artificial intelligence, deep learning, computer vision,
          and cybersecurity to solve real-world problems through innovative research.
        </p>

      </div>


      {/* =====================================
          PAPER 01
      ===================================== */}

      <article className="project-row project-row-one">

        {/* IMAGE */}

        <div className="project-image-section">

          <div className="project-glow glow-purple"></div>

          <div className="project-orb orb-purple"></div>

          <div className="project-orb orb-pink"></div>

          <div className="project-number">
            01
          </div>

          {/* Paper image goes here */}
          <img src={paper1} className="paper-image"></img>

          <div className="floating-project-label">
            COMPUTER VISION
          </div>

        </div>


        {/* CONTENT */}

        <div className="project-content">

          <div className="project-category">
            AI · COMPUTER VISION · DEEP LEARNING
          </div>

          <h3>
            Robust Steganalysis Using
            <span> Attention-Augmented Hybrid Networks</span>
          </h3>

          <p>
            A deep learning approach for detecting hidden information
            embedded within arbitrary-sized color images using
            attention-augmented hybrid neural network architectures.
          </p>

          <p>
            The research focuses on improving steganalysis performance
            by combining attention mechanisms with deep feature extraction
            for robust analysis of color images.
          </p>

                 <a
  href="/papers/Robust_Steganalysis_Using_Attention_Augmented_Hybrid_Networks_for_Arbitrary_Sized_Color_Images.pdf"
  className="project-button"
  target="_blank"
  rel="noopener noreferrer"
>
  View Research Paper
  <ArrowUpRight size={18} />
</a>

        </div>

      </article>


      {/* =====================================
          PAPER 02
      ===================================== */}

      <article className="project-row project-row-two">

        {/* CONTENT */}

        <div className="project-content">

          <div className="project-category">
            CYBERSECURITY · AI · DEEP LEARNING
          </div>

          <h3>
            From Bytes to Pixels:
            <span> Robust Malware Classification</span>
          </h3>

          <p>
            A deep learning-based approach that transforms raw malware
            binary data into visual representations for automated malware
            classification.
          </p>

          <p>
            The research explores how deep neural networks can analyze
            these visual representations to identify patterns and classify
            different types of malicious software.
          </p>
      <a
  href="/papers/ICDSINC2025_BTP.pdf"
  className="project-button"
  target="_blank"
  rel="noopener noreferrer"
>
  View Research Paper
  <ArrowUpRight size={18} />
</a>
      

        </div>


        {/* IMAGE */}

        <div className="project-image-section">

          <div className="project-glow glow-blue"></div>

          <div className="project-orb orb-blue"></div>

          <div className="project-number">
            02
          </div>
       
        
          {/* Paper image goes here */}

          <div className="floating-project-label">
            CYBERSECURITY
          </div>

 <img src={paper2} className="paper-image"></img>
        </div>

      </article>


      {/* =====================================
          PAPER 03
      ===================================== */}

      <article className="project-row project-row-three">

        {/* IMAGE */}

        <div className="project-image-section">

          <div className="project-glow glow-cyan"></div>

          <div className="project-orb orb-cyan"></div>

          <div className="project-number">
            03
          </div>

          {/* Paper image goes here */}

          <div className="floating-project-label">
            AQUATIC AI
          </div>


         <img src={paper3} className="paper-image"></img>
         
        </div>


        {/* CONTENT */}

        <div className="project-content">

          <div className="project-category">
            COMPUTER VISION · MACHINE LEARNING
          </div>

          <h3>
            AI-Based Fish Species
            <span> Classification Using Phenotypic Features</span>
          </h3>

          <p>
            An AI-powered classification approach designed to identify
            different fish species using observable phenotypic features
            extracted from images.
          </p>

          <p>
            The research applies machine learning and image-based analysis
            to recognize species-specific characteristics and support
            automated fish species identification.
          </p>

             <a
  href="/papers/291.pdf"
  className="project-button"
  target="_blank"
  rel="noopener noreferrer"
>
  View Research Paper
  <ArrowUpRight size={18} />
</a>

        </div>

      </article>


      {/* =====================================
          PAPER 04
      ===================================== */}

      <article className="project-row project-row-four">

        {/* CONTENT */}

        <div className="project-content">

          <div className="project-category">
            AGRICULTURE AI · TRANSFORMERS · DEEP LEARNING
          </div>

          <h3>
            Transformer-Based Deep Learning
            <span> for Potato Leaf Disease Classification</span>
          </h3>

          <p>
            A transformer-based deep learning approach for detecting
            and classifying diseases in potato leaf images.
          </p>

          <p>
            The research explores transformer architectures for learning
            visual patterns associated with plant diseases and enabling
            automated agricultural disease classification.
          </p>

        <a
  href="/papers/paper-4.pdf"
  className="project-button"
  target="_blank"
  rel="noopener noreferrer"
>
  View Research Paper
  <ArrowUpRight size={18} />
</a>
        </div>


        {/* IMAGE */}

        <div className="project-image-section">

          <div className="project-glow glow-green"></div>

          <div className="project-orb orb-green"></div>

          <div className="project-number">
            04
          </div>

          {/* Paper image goes here */}

          <div className="floating-project-label">
            AGRICULTURE AI
          </div>
     <img src={paper4} className="paper-image"></img>
        </div>

      </article>

 <article className="project-row project-row-three">

        {/* IMAGE */}

        <div className="project-image-section">

          <div className="project-glow glow-cyan"></div>

          <div className="project-orb orb-cyan"></div>

          <div className="project-number">
            05
          </div>

          {/* Paper image goes here */}

          <div className="floating-project-label">
            AQUATIC AI
          </div>


         <img src={paper5} className="paper-image"></img>
         
        </div>


        {/* CONTENT */}

        <div className="project-content">

          <div className="project-category">
            COMPUTER VISION · MACHINE LEARNING
          </div>

          <h3>
            A Comparative Patch-wise analysis of multiclass
            <span> weed detection using Sorghum dataset</span>
          </h3>

          <p>
            This research focuses on developing
             a robust steganalysis system using 
             attention-augmented hybrid neural networks 
             to detect hidden information in color images of varying sizes. 
             
          </p>

          <p>
            The proposed approach leverages deep learning techniques and attention mechanisms to identify subtle patterns and irregularities introduced during steganography. By combining multiple neural network architectures, the study aims to improve detection accuracy, adaptability, and reliability across arbitrary-sized color images, 
            contributing to advancements in digital image security and information forensics.
          </p>

             <a
  href="/papers/paper-5.pdf"
  className="project-button"
  target="_blank"
  rel="noopener noreferrer"
>
  View Research Paper
  <ArrowUpRight size={18} />
</a>

        </div>

      </article>

    </section>
  );
};

export default Projects;