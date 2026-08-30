import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <article className={`${styles.card} ${project.featured ? styles.featured : ''}`}>
      <div className={styles.number}>0{project.id}</div>
      <div className={styles.content}>
        {project.featured && <span className={styles.flag}>Featured</span>}
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline}
          >
            Visit project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
