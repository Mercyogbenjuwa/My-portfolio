import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import ProjectFan from "../components/ProjectFan";
import TypewriterRoles from "../components/TypewriterRoles";
import { experience, services } from "../lib/content";
import { getProjects } from "./api/projects";
import styles from "../styles/HomePage.module.css";

const companies = ["Juwa Tech", "Nathan Claire Africa", "Central Securities Clearing System", "Optimus Bank", "Talosmart", "Heirs Insurance"];

function Rise({ text, offset = 0 }) {
  return text.split(" ").map((word, i) => <Fragment key={`${word}-${i}`}><span style={{ "--i": i + offset }}>{word}</span>{" "}</Fragment>);
}

export default function HomePage({ projects }) {
  return <>
    <section className={styles.hero}>
      <p className="eyebrow eyebrow-line arrive"><TypewriterRoles /></p>
      <h1 className="rise"><Rise text="I build digital products" /><em><Rise text="that work." offset={4} /></em></h1>
      <p className={`${styles.lead} arrive-late`}>I’m Mercy. I plan products and build them, from the first idea to a system people rely on every day.</p>
      <div className={`${styles.actions} arrive-late`}>
        <Link href="/contact"><a className="button">Let’s work together <span aria-hidden="true">↗</span></a></Link>
        <a className="text-link" href="#work">See my work <span aria-hidden="true">→</span></a>
      </div>
      <ProjectFan projects={projects} />
    </section>

    <section className={styles.marquee} aria-label="Where I’ve worked">
      <div className={styles.track}>
        {[...companies, ...companies].map((name, i) => <span key={`${name}-${i}`} aria-hidden={i >= companies.length}>{name}<b aria-hidden="true">✦</b></span>)}
      </div>
    </section>

    <section className={styles.work} id="work">
      <div className={styles.head} data-reveal>
        <div><p className="eyebrow">Selected work</p><h2 className="section-title">Things I’ve helped build.</h2></div>
        <Link href="/projects"><a className="text-link">Stacks and details <span aria-hidden="true">→</span></a></Link>
      </div>
      <div className={styles.grid}>
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </div>
    </section>

    <section className={styles.aboutBand}>
      <div className={styles.about}>
        <div className={styles.photo} data-reveal><Image src="/profile.png" alt="Mercy Ogbenjuwa Ikya" layout="fill" objectFit="cover" /></div>
        <div data-reveal style={{ "--d": ".12s" }}>
          <p className="eyebrow">About</p>
          <h2 className="section-title">I lead the product and understand the code.</h2>
          <p>I shape roadmaps, keep teams aligned and work hands-on with engineers to ship software that holds up in production.</p>
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
