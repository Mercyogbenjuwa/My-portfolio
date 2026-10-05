import styles from "../styles/ProjectCover.module.css";

const tones = ["wine", "night", "rose", "berry", "blush", "plum", "clay", "deep"];

export default function ProjectCover({ project, index, size = "card" }) {
  if (project.art) {
    // eslint-disable-next-line @next/next/no-img-element -- static SVG art, no optimisation needed
    return <img className={styles.art} src={project.art} alt="" loading={size === "fan" ? "eager" : "lazy"} decoding="async" />;
  }
  return (
    <div className={`${styles.cover} ${styles[tones[index % tones.length]]} ${styles[size]}`}>
      <small>{project.category}</small>
      <b>{project.name}</b>
    </div>
  );
}
