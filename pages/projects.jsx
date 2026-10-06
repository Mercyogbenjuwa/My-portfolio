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
          <h1 className="page-title">Work I’m proud of.</h1>
          <p className="lead">Banking, capital markets, ERP, monitoring and business products, from plan to production.</p>
        </header>
        <div className={styles.grid}>
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} detailed />)}
        </div>
      </div>
      <section className={styles.services}>
        <div className={styles.centerHead} data-reveal><p className="eyebrow">Services</p><h2 className="section-title">How I can help your team.</h2></div>
        <div className="rows">
          {services.map((service, index) => <div className="row" key={service.title} data-reveal style={{ "--d": `${index * 0.05}s` }}><span className="row-index">0{index + 1}</span><div className="row-body"><h3>{service.title}</h3><p>{service.text}</p></div></div>)}
        </div>
        <div className={styles.cta}><Link href="/contact"><a className="button">Start a conversation <span aria-hidden="true">↗</span></a></Link></div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return { props: { title: "Work", description: "Selected work by Mercy Ogbenjuwa Ikya, including Juwa Hub, the CSCS custodian portal, Optimus Bank products and Converge ERP.", projects: getProjects() } };
}
