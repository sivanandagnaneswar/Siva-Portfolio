import React from "react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { FiMail } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import "../styles/footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer" id="footer">
      {/* =====================================
          TOP FOOTER
      ===================================== */}

      <div className="footer-top">
        {/* Brand */}

        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-dot"></span>
            Sivananda Gnaneswar S
          </div>

          <h2>
             +91 - 9842144599
          </h2>

          <p>
             I design modern scalable applications using multiple tech stacks.
          </p>
        </div>

        {/* =====================================
            NAVIGATION
        ===================================== */}

        <div className="footer-column">
          <span className="footer-heading">EXPLORE</span>

          <a href="#home">Home</a>

          <a href="#projects">Products</a>

          <a href="#about">About</a>

        </div>

        {/* =====================================
            SOCIAL
        ===================================== */}

        <div className="footer-column">
          <span className="footer-heading">CONNECT</span>

          <a
            href="https://www.linkedin.com/in/sivanandagnaneswar/"
            target="_blank"
            className="footer-social"
          >
            <FaLinkedin size={16} />
            LinkedIn
          </a>
        </div>

        {/* =====================================
            CONTACT
        ===================================== */}

        <div className="footer-column footer-contact">
          <span className="footer-heading">HAVE A PROJECT?</span>

         <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sivanandagnaneswar@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-email"
>
  sivanandagnaneswar@gmail.com
  <FaArrowUpRightFromSquare size={14} />
</a>
        </div>
      </div>

      {/* =====================================
          BIG BRAND TEXT
      ===================================== */}

      <div className="footer-big-text">
        <span>TECHNOLOGY</span>

        <span>ASPIRE</span>
      </div>

      {/* =====================================
          BOTTOM
      ===================================== */}
    </footer>
  );
};

export default Footer;
