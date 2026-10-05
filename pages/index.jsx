import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import ProjectFan from "../components/ProjectFan";
import TypewriterRoles from "../components/TypewriterRoles";
import { experience, services } from "../lib/content";
import { getProjects } from "./api/projects";
import styles from "../styles/HomePage.module.css";

function Rise({ text, offset = 0 }) {
  return text.split(" ").map((word, i) => <Fragment key={`${word}-${i}`}><span style={{ "--i": i + offset }}>{word}</span>{" "}</Fragment>);
}

export default function HomePage({ projects }) {
  return <>
    <section className={styles.hero}>
      <p className="eyebrow eyebrow-line arrive"><TypewriterRoles /></p>
      <h1 className="rise"><Rise text="I turn ideas into" /><em><Rise text="products people rely on." offset={4} /></em></h1>
      <p className={`${styles.lead} arrive-late`}>Product manager and senior engineer. I’ve shipped banking, capital markets and ERP systems, and I founded Juwa Tech, the company behind Juwa Hub.</p>
      <div className={`${styles.actions} arrive-late`}>
        <Link href="/contact"><a className="button">Let’s work together <span aria-hidden="true">↗</span></a></Link>
        <a className="text-link" href="#work">See my work <span aria-hidden="true">→</span></a>
      </div>
      <ProjectFan projects={projects} />
    </section>

    <section className={styles.work} id="work">
      <div className={styles.head} data-reveal>
        <div><p className="eyebrow">Selected work</p><h2 className="section-title">Things I’ve helped build.</h2></div>
        <Link href="/projects"><a className="text-link">See all {projects.length} projects <span aria-hidden="true">→</span></a></Link>
      </div>
      <div className={styles.grid}>
        {projects.slice(0, 3).map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </div>
    </section>

    <section className={styles.aboutBand}>
      <div className={styles.about}>
        <div className={styles.photo} data-reveal><Image src="/profile.png" alt="Mercy Ogbenjuwa Ikya" layout="fill" objectFit="cover" /></div>
        <div data-reveal style={{ "--d": ".12s" }}>
          <p className="eyebrow">About</p>
          <h2 className="section-title">Clear plans. Solid builds.</h2>
          <p>I turn what a business needs into a clear plan, then work alongside engineers to ship it. Since 2021, that has taken me through insurance, banking, capital markets and my own company.</p>
          <Link href="/about"><a className="text-link">More about me <span aria-hidden="true">→</span></a></Link>
        </div>
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.centerHead} data-reveal><p className="eyebrow">What I offer</p><h2 className="section-title">How I can help.</h2></div>
      <div className="rows">
        {services.slice(0, 4).map((service, index) => <div className="row" key={service.title} data-reveal style={{ "--d": `${index * 0.06}s` }}><span className="row-index">0{index + 1}</span><div className="row-body"><h3>{service.title}</h3><p>{service.text}</p></div></div>)}
      </div>
    </section>

    <section className={`${styles.section} ${styles.flush}`}>
      <div className={styles.centerHead} data-reveal><p className="eyebrow">Experience</p><h2 className="section-title">Where I’ve worked.</h2></div>
      <div className="rows">
        {experience.slice(0, 4).map((job, index) => <div className="row" key={`${job.company}-${job.duration}`} data-reveal style={{ "--d": `${index * 0.06}s` }}><span className="row-index">0{index + 1}</span><div className="row-body"><h3>{job.company}</h3><p>{job.role || job.workType}</p></div><span className="row-meta">{job.duration}</span></div>)}
      </div>
      <div className={styles.more}><Link href="/resume"><a className="text-link">Full experience <span aria-hidden="true">→</span></a></Link></div>
    </section>

    <section className={styles.contact}>
      <div data-reveal>
        <p className="eyebrow">Contact</p>
        <h2>Got a product in mind? Let’s talk.</h2>
        <div className={styles.actions}>
          <Link href="/contact"><a className={styles.light}>Start a conversation <span aria-hidden="true">↗</span></a></Link>
          <a className="text-link" href="mailto:ogbenjuwamercyonyoibo@gmail.com">Email me <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  </>;
}

export async function getStaticProps() {
  return { props: { title: "Mercy Ogbenjuwa Ikya", projects: getProjects() } };
}
