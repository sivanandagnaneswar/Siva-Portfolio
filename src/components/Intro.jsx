import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import "./Intro.css";
import swetha from "../images/swetha.jpeg";
function Intro({ onEnter }) {
  return (
    <main className="intro-page">

      {/* Background */}
      <div className="intro-grid"></div>

      <div className="intro-orb orb-one"></div>
      <div className="intro-orb orb-two"></div>
      <div className="intro-orb orb-three"></div>

      {/* Header */}
      <motion.header
        className="intro-header"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="intro-brand">
          <div className="brand-icon">
            <Sparkles size={17} />
          </div>

          <div>
            <span>PORTFOLIO</span>
            <small>Interactive Experience</small>
          </div>
        </div>

        <div className="intro-status">
          <span className="status-dot"></span>
          Welcome
        </div>
      </motion.header>

      {/* Main */}
      <section className="intro-content">

        {/* Text */}
        <motion.div
          className="intro-copy"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <p className="intro-eyebrow">
            A PERSONAL WELCOME
          </p>

          <h1>
            Hi <span>Shwetha Mam</span>
            <br />
            <strong>Glad you're here.</strong>
          </h1>

          <p className="intro-description">
            Every journey becomes special when guided by the right people. Welcome to this little surprise, created with respect and gratitude.
            <br />
            So here's a small introduction before you explore.
          </p>

          <motion.button
            className="intro-button"
            onClick={onEnter}
            whileHover={{
              scale: 1.04,
              x: 5
            }}
            whileTap={{
              scale: 0.97
            }}
          >
            <span>Explore My Portfolio</span>

            <div className="button-icon">
              <ArrowRight size={19} />
            </div>
          </motion.button>

          <div className="intro-hint">
            <span className="hint-line"></span>
            <span>Click to continue</span>
          </div>
        </motion.div>

        {/* Swetha Image */}
        <motion.div
          className="intro-visual"
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 40
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 0.35
          }}
        >
          <div className="visual-ring ring-one"></div>
          <div className="visual-ring ring-two"></div>

          <div className="visual-card">

            <div className="image-container">
              <img
                src={swetha}
                alt="Swetha"
              />
            </div>

            <motion.div
              className="hello-bubble"
              animate={{
                y: [0, -8, 0],
                rotate: [0, 3, -3, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              👋
            </motion.div>

            <div className="visual-info">
              <span>HELLO</span>
              <strong>Shwetha</strong>
            </div>

          </div>

          {/* Floating Card */}
          <motion.div
            className="floating-card card-one"
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
          >
            <span>✦</span>

            <div>
              <small>Nice to</small>
              <strong>Meet you</strong>
            </div>
          </motion.div>

          <motion.div
            className="floating-card card-two"
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity
            }}
          >
            <span>01</span>
            <small>INTRO</small>
          </motion.div>

        </motion.div>

      </section>

      {/* Footer */}
      <footer className="intro-footer">
        <span>SCROLL / EXPLORE</span>

        <div className="footer-line">
          <div></div>
        </div>

        <span>01 — 01</span>
      </footer>

    </main>
  );
}

export default Intro;