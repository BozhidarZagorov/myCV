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


    </section>
  );
}
