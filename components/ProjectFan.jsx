import ProjectCover from "./ProjectCover";
import styles from "../styles/ProjectFan.module.css";

// Lead project sits in the centre; the rest alternate outwards.
function fanOrder(projects) {
  const cards = projects.slice(0, 5).map((project, index) => ({ project, index }));
  const ordered = [];
  cards.forEach((card, i) => (i % 2 ? ordered.unshift(card) : ordered.push(card)));
  return ordered;
}

export default function ProjectFan({ projects }) {
  const cards = fanOrder(projects);
  const middle = (cards.length - 1) / 2;
  return (
    <div className={styles.stage} aria-hidden="true">
      {cards.map(({ project, index }, position) => {
        const offset = position - middle;
        return (
          <div key={project.id} className={styles.slot} style={{ "--o": offset, zIndex: 10 - Math.abs(offset) }}>
            <div className={styles.card}><ProjectCover project={project} index={index} size="fan" /></div>
          </div>
        );
      })}
    </div>
  );
}
