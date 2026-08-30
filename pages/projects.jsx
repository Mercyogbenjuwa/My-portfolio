import ProjectCard from "../components/ProjectCard";
import { getProjects } from "./api/projects";
import styles from "../styles/ProjectsPage.module.css";

const ProjectsPage = ({ projects }) => {
  return (
    <div className="page">
      <p className="eyebrow">Selected work</p>
      <h1 className="page-title">Products that move businesses forward.</h1>
      <p className="lead">A selection of financial, enterprise and operational platforms I’ve helped shape and ship across product and engineering.</p>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: "Work", projects },
  };
}

export default ProjectsPage;
