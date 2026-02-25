import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useProjects } from "../hooks/useProjects";
import { useOtherSkills } from "../hooks/useOtherSkills";
import ProjectCard from "../components/ProjectCard";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function CV() {
  const skillsRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { projects, inProgress, loading, error } = useProjects();
  const { skills: otherSkills, loading: otherSkillsLoading, error: otherSkillsError } = useOtherSkills();

  
    const skills = [
      { name: "JavaScript", level: 90},
      { name: "React", level: 85},
      { name: "Firebase", level: 80},
      { name: "Node.js", level: 75},
      { name: "TypeScript", level: 75},
      { name: "Tailwind CSS", level: 80},
      { name: "CSS", level: 75},
      { name: "React Native", level: 78},
      { name: "HTML", level: 75},
      { name: "Docker", level: 75},
      { name: "Git", level: 79},
      { name: "GitHub Actions & Projects", level: 80},
      { name: "Terraform", level: 78}
    ];

  const sortedSkills = [...skills].sort((a, b) => b.level - a.level);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        { threshold: 0.1 } // triggers on 10% visible
      );
    
      if (skillsRef.current) {
        observer.observe(skillsRef.current);
      }
    
      return () => {
        if (skillsRef.current) {
          observer.unobserve(skillsRef.current);
        }
      };
    }, []);

    useEffect(() => {
      const chips = document.querySelectorAll(".skills-list span");
      const colors = [
        "#38bdf8",
        "#22c55e",
        "#eab308",
        "#f97316",
        "#ec4899",
        "#a855f7"
      ];

      const handleEnter = (e) => {
        const target = e.currentTarget;
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        target.style.backgroundColor = randomColor;
        target.style.color = "#020617";
      };

      const handleLeave = (e) => {
        const target = e.currentTarget;
        target.style.backgroundColor = "";
        target.style.color = "";
      };

      chips.forEach((chip) => {
        chip.addEventListener("mouseenter", handleEnter);
        chip.addEventListener("mouseleave", handleLeave);
      });

      return () => {
        chips.forEach((chip) => {
          chip.removeEventListener("mouseenter", handleEnter);
          chip.removeEventListener("mouseleave", handleLeave);
        });
      };
    }, [projects, inProgress, otherSkills]);


  return (
    <section id="cv" className="cv-section cv-page">
      <motion.div 
        className="cv-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
      >
        <motion.h2 className="cv-title" variants={item}>
          Resume
        </motion.h2>

        {/* ABOUT ME */}
        <motion.div className="cv-block" variants={item}>
          <h3 className="cv-block-title">About Me</h3>
        <div className="cv-row">
        <div>
          <p>
            Full-Stack JavaScript developer with a strong analytical mindset and a passion
            for building scalable web applications. My background in competitive chess,
            National-level competition in linguistics, and mathematics competitions has strengthened
            my strategic thinking and structured problem-solving skills. I also led a NASA Modeling Project
            in 2019–2020, which allowed me to apply these skills to complex, 
            real-world challenges in a collaborative team setting.
          </p>
          <div className="cv-tags">
            <span>♟ FIDE Rated Chess Player (~1800 inactive)</span>
            <span>🗣️ Participant in National-level Linguistics competition </span>
            <span>📐 Mathematics Competition Experience</span>
            <span>🚀 NASA Modeling Project (Team Lead)</span>
          </div>
        </div>
          <div className="cv-image">
              <img src="/profilepic.png" alt="Your Name" />
              <a
                href="https://github.com/BozhidarZagorov"
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
                style={{ marginRight: "0.5rem" }}
              >
                <path d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.22c-3.34.73-4.04-1.6-4.04-1.6a3.18 3.18 0 00-1.33-1.75c-1.09-.74.08-.73.08-.73a2.51 2.51 0 011.83 1.23 2.56 2.56 0 003.5 1 2.55 2.55 0 01.76-1.6c-2.66-.3-5.47-1.34-5.47-5.95a4.65 4.65 0 011.24-3.23 4.3 4.3 0 01.12-3.18s1-.32 3.3 1.23a11.4 11.4 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 01.12 3.18 4.65 4.65 0 011.24 3.23c0 4.62-2.81 5.64-5.48 5.94a2.85 2.85 0 01.81 2.22v3.3c0 .32.21.7.83.58A12 12 0 0012 0z"/>
              </svg>
                GitHub
              </a>
          </div>
        </div>
        <div>
            <div>
              <h3 className="cv-block-title">Hobbies & Interests</h3>

              <p>
                I’m drawn to activities that blend creativity, strategy, and problem-solving.
                Fishing and woodworking cultivate patience and precision, 
                while exploring game modding sharpens my technical creativity and 
                understanding of complex systems. Story-driven music fuels focus and 
                inspiration.
              </p>

              <div className="cv-tags">
                <span>🎣 Fishing</span>
                <span>🪵 Woodworking</span>
                <span>🎵 Music (Favorite <strong>Queen</strong>)</span>
                <span>📝 Meaningful Lyrics</span>
                <span>🛠 Game Modding</span>
              </div>
            </div>
        </div>

        </motion.div>


        {/* EXPERIENCE */}
        <motion.div className="cv-block" variants={item}>
          <h3 className="cv-block-title">Experience</h3>

          <div className="cv-item">
            <h4>Full-Stack Web Developer</h4>
            <span className="cv-meta">2026 – Present</span>
            <ul>
              <li>Creating scalable web applications with React</li>
              <li>Developing modern mobile applications using React Native & TypeScript</li>
            </ul>
          </div>
        
          <div className="cv-item">
            <h4>Full-Stack Developer (Training & Projects)</h4>
            <span className="cv-meta">SoftUni — 2023 – 2025</span>
            <ul>
              <li>Modern React applications</li>
              <li>Advanced JavaScript architecture</li>
              <li>Backend-only web applications</li>
            </ul>
          </div>
      </motion.div>

        {/* PROJECTS */}
        <motion.div className="cv-block" variants={item}>
          <h1 className="cv-block-title">Projects</h1>
          {error && (
            <p className="cv-meta" style={{ color: "#f87171" }}>{error}</p>
          )}
          {loading && (
            <p className="cv-meta">Loading projects…</p>
          )}
          {!loading && !error && projects.length === 0 && (
            <p className="cv-meta">No projects yet.</p>
          )}
          {!loading && projects.map((project) => (
            <ProjectCard key={project.id} project={project} variant="full" />
          ))}

        </motion.div>

        {/* PROJECTS IN PROGRESS */}
        <motion.div className="cv-block" variants={item}>
          <h1 className="cv-block-title">Projects in Progress</h1>
          {!loading && inProgress.length === 0 && (
            <p className="cv-meta">No projects in progress.</p>
          )}
          {inProgress.map((project) => (
            <ProjectCard key={project.id} project={project} variant="compact" />
          ))}
        </motion.div>


        {/* EARLY PROJECTS */}
        <motion.div className="cv-block" variants={item}>
          <h3 className="cv-block-title">Early Projects</h3>

          <div className="cv-item">
            <h4>
              <a
                href="https://www.youtube.com/watch?v=LKXPG_pHHtk"
                target="_blank"
                rel="noopener noreferrer"
              >
                NASA Modeling Project (Team Lead)
              </a>
            </h4>
            <span className="cv-meta">2019 – 2020</span>
          </div>

          <div className="cv-item">
            <h4>HSSIMI – High School Student Institute of Mathematics and Informatics</h4>
            <span className="cv-meta">XOR Cipher Project - Python to C++ — 2019</span>
          </div>
        </motion.div>


        {/* EDUCATION */}
        <motion.div className="cv-block" variants={item}>
          <h3 className="cv-block-title">Education</h3>

          <div className="cv-item">
            <h4>Sofia University – FMI</h4>
            <span className="cv-meta">2020 – 2022</span>
            <ul>
              <li>
                Python Fundamentals
              </li>
            </ul>
          </div>

          <div className="cv-item">
            <h4>
              High School of Natural Sciences & Mathematics "Ivan Vazov"
            </h4>
            <span className="cv-meta">2012 – 2020</span>
            <ul>
              <li>C++ Fundamentals & OOP</li>
              <li>C# Basics</li>
            </ul>
          </div>
        </motion.div>

         {/* CERTIFICATES */}
        <motion.div className="cv-block" variants={item}>
          <h3 className="cv-block-title">Certificates</h3>

          <div className="cv-item">
            <h4>
              <a
                href="https://softuni.bg/Certificates/Details/256066/3f486ad8"
                target="_blank" rel="noopener noreferrer"
              >
                Front-End Developer with JavaScript – SoftUni
              </a>
            </h4>
            <span className="cv-meta">2024 – 2025</span>

            <ul>
              <li>
                <a
                  href="https://softuni.bg/Certificates/Details/204477/cc6935ed"
                  target="_blank" rel="noopener noreferrer"
                >
                  Programming Basics (6.00)
                </a>
              </li>
              <li>
                <a
                  href="https://softuni.bg/Certificates/Details/222055/c913ca43"
                  target="_blank" rel="noopener noreferrer"
                >
                  Programming Fundamentals (6.00)
                </a>
              </li>
              <li>
                <a 
                href="https://softuni.bg/Certificates/Details/227925/d0e7e7e7" 
                target="_blank" rel="noopener noreferrer">JS Advanced (6.00)</a>
              </li>
              <li>
                <a 
                href="https://softuni.bg/Certificates/Details/231938/844f26a0" 
                target="_blank" rel="noopener noreferrer">JS Applications (6.00)</a>
              </li>
              <li>
                <a 
                href="https://softuni.bg/Certificates/Details/237692/2ba42336" 
                target="_blank" rel="noopener noreferrer">Js Back-End (6.00)</a>
              </li>
              <li>
                <a 
                href="https://softuni.bg/Certificates/Details/241499/e217fa51" 
                target="_blank" rel="noopener noreferrer">ReactJS (6.00)</a>
              </li>
              <li>
                <a 
                href="https://softuni.bg/Certificates/Details/245830/d6ab997c" 
                target="_blank" rel="noopener noreferrer">HTML & CSS (6.00)</a>
              </li>
              <li>
                <a 
                href="https://softuni.bg/Certificates/Details/245039/78d54968" 
                target="_blank" rel="noopener noreferrer">TypeScript (6.00)</a>
              </li>
              <li>
                <a 
                href="https://softuni.bg/Certificates/Details/252736/dee33b68" 
                target="_blank" rel="noopener noreferrer">Software Engineering and DevOps (6.00)</a>
              </li>
              <li>
                <a 
                href="https://softuni.bg/Certificates/Details/255495/b3baf2c5" 
                target="_blank" rel="noopener noreferrer">Containers and Cloud (6.00)</a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* SKILLS PROFICIENCY */}
        <motion.div 
          className="cv-block" 
          ref={skillsRef}
          variants={item}
        >
          <h3 className="cv-block-title">Skills Proficiency</h3>

          <motion.div 
            className="skills-grid"
            variants={container}
          >
            {sortedSkills.map((skill, index) => (
              <motion.div 
                className="skill-item" 
                key={index}
                variants={item}
              >
                <div className="skill-header">
                  <span>{skill.name}</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-fill"
                    initial={{ width: "0%" }}
                    animate={{ width: visible ? `${skill.level}%` : "0%" }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

         {/* SKILLS */}
        <motion.div className="cv-block" variants={item}>
          <h3 className="cv-block-title">Other Skills</h3>
          {otherSkillsError && (
            <p className="cv-meta" style={{ color: "#f87171" }}>{otherSkillsError}</p>
          )}
          {otherSkillsLoading && (
            <p className="cv-meta">Loading skills…</p>
          )}
          {!otherSkillsLoading && otherSkills.length === 0 && !otherSkillsError && (
            <p className="cv-meta">No skills listed</p>
          )}
          <div className="skills-list">
            {otherSkills.map((s) => (
              <span key={s.id}>{s.name}</span>
            ))}
          </div>
        </motion.div>


      </motion.div>
    </section>
  );
}
