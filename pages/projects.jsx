import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import { getProjects } from "./api/projects";
import styles from "../styles/ProjectsPage.module.css";

const ProjectsPage = ({ projects }) => {
  const services = [
    { title: "Product strategy & delivery", text: "Roadmaps, discovery, requirements, stakeholder alignment and delivery leadership from idea to launch." },
    { title: "Custom software development", text: "Responsive web applications and internal tools built around real business workflows." },
    { title: "Backend systems & APIs", text: "Secure services, integrations, databases and scalable application architecture." },
    { title: "ERP & process automation", text: "Operational platforms that replace manual work with clear, dependable workflows." },
    { title: "Cloud, DevOps & monitoring", text: "Deployment pipelines, observability and platform improvements that keep products reliable." },
    { title: "Technical product consulting", text: "Practical support for teams making product, architecture and delivery decisions." },
  ];
  return (
    <div className="page">
      <p className="eyebrow">Selected work</p>
      <h1 className="page-title">Products that move businesses forward.</h1>
      <p className="lead">I partner with companies to shape, build and improve financial, enterprise and operational products—from product strategy through production engineering.</p>
      <section className={styles.services}>
        <div className={styles.sectionTitle}><p className="eyebrow">Services</p><h2>How I can help your team.</h2></div>
        <div className={styles.serviceGrid}>{services.map((service,index)=><article key={service.title}><span>0{index+1}</span><h3>{service.title}</h3><p>{service.text}</p></article>)}</div>
      </section>
      <div className={styles.workTitle}><p className="eyebrow">Project archive</p><h2>Selected platforms and client work.</h2></div>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <section className={styles.cta}><div><p className="eyebrow">Have a project in mind?</p><h2>Let’s build something useful.</h2></div><Link href="/contact"><a className="button">Start a conversation ↗</a></Link></section>
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
