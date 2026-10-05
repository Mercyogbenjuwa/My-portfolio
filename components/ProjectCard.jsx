import ProjectCover from "./ProjectCover";
import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({ project, index, detailed = false }) {
  return (
    <a className={styles.card} href={project.demo} target="_blank" rel="noopener noreferrer" data-reveal style={{ "--d": `${(index % 4) * 0.08}s` }}>
      <div className={`${styles.image} ${detailed ? styles.wide : ""}`}>
        <div className={styles.zoom}><ProjectCover project={project} index={index} /></div>
        <span className={styles.view} aria-hidden="true">Visit ↗</span>
      </div>
      <h3>{project.name}<span aria-hidden="true">↗</span></h3>
      <p className={detailed ? styles.full : ""}>{project.description}</p>
      {detailed && <div className={styles.tags}>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
    </a>
  );
}
