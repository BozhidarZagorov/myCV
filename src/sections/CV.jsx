export default function CV() {
  return (
    <section id="cv" className="cv-section">
      <div className="cv-container">

        <h2 className="cv-title">Resume</h2>

        {/* ABOUT ME */}
        <div className="cv-block">
          <h3 className="cv-block-title">About Me</h3>

          <p className="cv-about-text">
            Full-Stack JavaScript developer with a strong analytical mindset and a passion
            for building scalable web applications. My background in competitive chess,
            Country-Level linguistics, and mathematics competitions, fishing and woorworking has strengthened
            my strategic thinking and structured problem-solving skills.
          </p>
          <div className="cv-tags">
            <span>♟ FIDE Rated Chess Player (~1800 inactive)</span>
            <span>🗣️ Country-Level Linguistics Competition Participant</span>
            <span>📐 Mathematics Competition Experience</span>
            <span>🎣 Fishing</span>
            <span>🪵 Woodworking</span>
          </div>

        </div>


        {/* EXPERIENCE */}
        <div className="cv-block">
          <h3 className="cv-block-title">Experience</h3>
        <div className="cv-row">
          <div className="cv-item">
            <h4>Full-Stack Web Developer</h4>
            <span className="cv-meta">2026 – Present</span>
            <ul>
              <li>Creating scalable web applications with React</li>
              <li>Developing modern mobile applications using React Native & TypeScript</li>
            </ul>
          </div>
           <div className="cv-image">
              <img src="/profilepic.jpg" alt="Your Name" />
          </div>
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
            <h4>LISH – XOR Cipher Project</h4>
            <span className="cv-meta">Python to C++ — 2019</span>
          </div>
        </div>


    </section>
  );
}
