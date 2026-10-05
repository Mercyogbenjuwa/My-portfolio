import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { services } from "../lib/content";
import { getProjects } from "./api/projects";
import styles from "../styles/ProjectsPage.module.css";

export default function ProjectsPage({ projects }) {
  return (
    <>
      <div className="page">
        <header className="arrive">
          <p className="eyebrow eyebrow-line">Selected work</p>
          <h1 className="page-title">Products that move businesses forward.</h1>
          <p className="lead">Financial, enterprise and operational products, from product strategy to production engineering.</p>
        </header>
        <div className={styles.grid}>
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} detailed />)}
        </div>
      </div>
      <section className={styles.services}>
        <div className={styles.centerHead}><p className="eyebrow">Services</p><h2 className="section-title">How I can help your team.</h2></div>
        <div className="rows">
          {services.map((service, index) => <div className="row" key={service.title}><span className="row-index">0{index + 1}</span><div className="row-body"><h3>{service.title}</h3><p>{service.text}</p></div></div>)}
        </div>
        <div className={styles.cta}><Link href="/contact"><a className="button">Start a conversation <span aria-hidden="true">↗</span></a></Link></div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return { props: { title: "Work", projects: getProjects() } };
}
