import styles from "../styles/ProjectCover.module.css";

const tones = ["wine", "night", "rose", "berry", "blush", "plum", "clay", "deep"];

export default function ProjectCover({ project, index, size = "card" }) {
  return (
    <div className={`${styles.cover} ${styles[tones[index % tones.length]]} ${styles[size]}`}>
      <small>{project.category}</small>
      <b>{project.name}</b>
    </div>
  );
}
