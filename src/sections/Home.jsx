import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="intro" variants={item}>
          Hi, I am
        </motion.p>

        <motion.h1 className="hero-title" variants={item}>
          Bozhidar Zagorov
        </motion.h1>

        <motion.h2 className="hero-role" variants={item}>
          Full-Stack JavaScript Developer
        </motion.h2>

        <motion.p className="hero-description" variants={item}>
          Building scalable, user-focused web and mobile applications
        </motion.p>

        <motion.div className="hero-actions" variants={item}>
          <a href="#cv" className="hero-button">View CV</a>
          <a href="#contact" className="hero-button secondary">Contact Me</a>
        </motion.div>
      </motion.div>
    </section>
  );
}
