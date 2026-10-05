import ProjectCover from "./ProjectCover";
import styles from "../styles/ProjectFan.module.css";

const STEP = 13;

// Lead project sits in the centre; the rest alternate outwards.
function fanOrder(projects) {
  const cards = projects.slice(0, 7).map((project, index) => ({ project, index }));
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
          <div
            key={project.id}
            className={styles.slot}
            style={{ "--angle": `${offset * STEP}deg`, "--delay": `${0.25 + Math.abs(offset) * 0.09}s`, zIndex: 10 - Math.abs(offset) }}
          >
            <div className={styles.card}><ProjectCover project={project} index={index} size="fan" /></div>
          </div>
        );
      })}
    </div>
  );
}
