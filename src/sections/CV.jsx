import { useEffect, useRef, useState } from "react";

export default function CV() {
  const skillsRef = useRef(null);
  const [visible, setVisible] = useState(false);

  
    const skills = [
      { name: "JavaScript", level: 90},
      { name: "React", level: 85},
      { name: "Firebase", level: 80},
      { name: "Node.js", level: 75},
      { name: "TypeScript", level: 75},
      { name: "Tailwind", level: 80},
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
        { threshold: 0.3 } // triggers when 30% visible
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


  return (
    <section id="cv" className="cv-section">
      <div className="cv-container">

        <h2 className="cv-title">Resume</h2>

        {/* ABOUT ME */}
        <div className="cv-block">
          <h3 className="cv-block-title">About Me</h3>
        <div className="cv-row">
        <div>
          <p className="cv-about-text">
            Full-Stack JavaScript developer with a strong analytical mindset and a passion
            for building scalable web applications. My background in competitive chess,
            National-level competition in linguistics, and mathematics competitions, fishing and woorworking has strengthened
            my strategic thinking and structured problem-solving skills.
          </p>
          <div className="cv-tags">
            <span>♟ FIDE Rated Chess Player (~1800 inactive)</span>
            <span>🗣️ Participant in National-level Linguistics competition </span>
            <span>📐 Mathematics Competition Experience</span>
            <span>🎣 Fishing</span>
            <span>🪵 Woodworking</span>
          </div>
        </div>
          <div className="cv-image">
              <img src="/profilepic.jpg" alt="Your Name" />
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
          

        </div>


        {/* EXPERIENCE */}
        <div className="cv-block">
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
      </div>

        {/* PROJECTS */}
        <div className="cv-block">
          <h3 className="cv-block-title">Projects</h3>

          <div className="cv-item">
            <h4>
              <a
                href="heaven-guesthouse.web.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                GuestHouse Haven
              </a></h4>
                <span className="cv-meta">
                  A full-featured apartment booking platform featuring an interactive calendar for availability, Google Maps integration, Google authentication, detailed apartment listings with photos and prices, a gallery showcasing the surrounding area, and a one-click reservation system with automatic email confirmations.
                </span>

          </div>

        </div>


        {/* EARLY PROJECTS */}
        <div className="cv-block">
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
        </div>


        {/* EDUCATION */}
        <div className="cv-block">
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
        </div>

         {/* CERTIFICATES */}
        <div className="cv-block">
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
        </div>

        {/* SKILLS PROFICIENCY */}
        <div className="cv-block" ref={skillsRef}>
          <h3 className="cv-block-title">Skills Proficiency</h3>

          <div className="skills-grid">

            {sortedSkills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-header">
                  <span>{skill.name}</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: visible ? `${skill.level}%` : "0%" }}
                  ></div>
                </div>
              </div>
            ))}

          </div>
        </div>

         {/* SKILLS */}
        <div className="cv-block">
          <h3 className="cv-block-title">Other Skills</h3>

          <div className="skills-list">
            <span>Vite</span>
            <span>Postman</span>
            <span>Supabase</span>
            <span>Vercel</span>
            <span>Cloudinary</span>
            <span>Azure</span>
            <span>nginx</span>
            <span>Grafana</span>
            <span>Alertmanager</span>
            <span>Blackbox</span>
            <span>react-i18next</span>
            <span>EmailJS</span>
            <span>Expo</span>
            <span>Async Storage</span>
            <span>Express</span>
            <span>Recharts</span>
            <span>PostgreSQL</span>
            <span>Python</span>
            <span>C++</span>
            <span>C#</span>
          </div>
        </div>


      </div>
    </section>
  );
}
