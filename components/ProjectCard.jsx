import ProjectCover from "./ProjectCover";
import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({ project, index, detailed = false }) {
  return (
    <a className={styles.card} href={project.demo} target="_blank" rel="noopener noreferrer">
      <div className={`${styles.image} ${detailed ? styles.wide : ""}`}>
        <ProjectCover project={project} index={index} />
        {project.live && <span className={styles.live}>Live</span>}
        <span className={styles.view} aria-hidden="true">Visit project ↗</span>
      </div>
      <h3>{project.name}<span aria-hidden="true">↗</span></h3>
      <p className={detailed ? styles.full : ""}>{project.description}</p>
      {detailed && <div className={styles.tags}>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
    </a>
  );
}
