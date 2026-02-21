export default function ProjectCard({ project, variant = "full" }) {
  const { title, description, skills = [], link, image, imageAlt } = project;
  const hasImage = variant === "full" && image;

  if (variant === "compact") {
    return (
      <div className="cv-item">
        <h2>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h2>
        {description && <p className="cv-meta">{description}</p>}
        {skills.length > 0 && (
          <div className="skills-list">
            {skills.map((skill, i) => (
              <span key={i}>{skill}</span>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="cv-project-row">
      <div className="cv-project-text">
        <h2>{title}</h2>
        {description && <p className="cv-meta">{description}</p>}
        {skills.length > 0 && (
          <div className="skills-list">
            {skills.map((skill, i) => (
              <span key={i}>{skill}</span>
            ))}
          </div>
        )}
      </div>
      <div className="cv-project-image-wrapper">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {hasImage ? (
              <img
                src={image}
                alt={imageAlt || title}
                className="cv-project-image"
              />
            ) : (
              <span className="cv-project-placeholder">View project →</span>
            )}
          </a>
        ) : hasImage ? (
          <img
            src={image}
            alt={imageAlt || title}
            className="cv-project-image"
          />
        ) : null}
      </div>
    </div>
  );
}
