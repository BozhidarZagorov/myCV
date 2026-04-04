import React from "react";

const PdfCV = React.forwardRef(({ projects = [], otherSkills = [], sortedSkills = [] }, ref) => {
  return (
    <div ref={ref} className="pdf-cv">

      {/* LEFT */}
          <div className="pdf-left">
            <img src="/profilepic.png" className="pdf-avatar" />

            <h1>Bozhidar Zagorov</h1>
            <h2>Full-Stack Developer</h2>

            <div className="pdf-section">
              <h3>Main Skills</h3>
              {sortedSkills?.slice(0, 12).map(s => (
                <p key={s.name}>{s.name}</p>
              ))}
            </div>

            <div className="pdf-section">
              <h3>Other Skills</h3>
              {otherSkills?.slice(0, 20).map(s => (
                <p key={s.id}>{s.name}</p>
              ))}
            </div>
            <div className="pdf-section">
                <h3>Contact Details</h3>
                <p>phone number: 088 654 8334</p>
                <p>e-mail: bozhidarzagorov@gmail.com</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="pdf-right">
            <div className="pdf-section-main">
              <h3>About me</h3>
                <p>Full-Stack JavaScript developer focused on building scalable web applications with React and modern technologies.</p>
                <p>Strong analytical background from competitive chess, linguistics, and mathematics, enabling structured problem-solving and strategic thinking.</p>
                <p>Led a NASA Modeling Project (2019–2020), applying these skills to real-world challenges in a collaborative environment.</p>
            </div>

            <div className="pdf-section">
              <h3>Experience</h3>
              <p><strong>Full-Stack JavaScript Dev</strong> (since late 2025)</p>
              <p><strong>JavaScript Dev</strong> (since early 2024)</p>
              <p>React SPA apps, mobile apps, backend systems</p>
            </div>

            <div className="pdf-section">
              <h3>Projects</h3>
                <ul>
                    {projects?.slice(0, 6).map(p => (
                        <li key={p.id}>
                        <a href={p.link} target="_blank" rel="noopener noreferrer">
                          <p>{p.title}</p>
                        </a>
                        <div>{p.skills.join(" | ")}</div>
                      </li>
                    ))}
                </ul>
            </div>

            <div className="pdf-section">
              <h3>Education</h3>
              <p>SoftUni - Software University (early 2023 - late 2025)</p>
              <p>Sofia University FMI (2020-2022)</p>
              <p>High School of Natural Sciences & Mathematics "Ivan Vazov" (2012-2020)</p>
            </div>
          </div>

    </div>
  );
});

export default PdfCV;