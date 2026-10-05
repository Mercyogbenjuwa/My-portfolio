import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import ProjectFan from "../components/ProjectFan";
import TypewriterRoles from "../components/TypewriterRoles";
import { experience, services } from "../lib/content";
import { getProjects } from "./api/projects";
import styles from "../styles/HomePage.module.css";

export default function HomePage({ projects }) {
  return <>
    <section className={styles.hero}>
      <div className="arrive">
        <p className="eyebrow eyebrow-line"><TypewriterRoles /></p>
        <h1>I build digital products <em>that work.</em></h1>
        <p className={styles.lead}>Founder of Juwa Tech, Product Manager and Senior Product Engineer.</p>
        <div className={styles.actions}>
          <Link href="/contact"><a className="button">Let’s work together <span aria-hidden="true">↗</span></a></Link>
          <a className="text-link" href="#work">View the work <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="arrive-late"><ProjectFan projects={projects} /></div>
    </section>

    <section className={styles.work} id="work">
      <div className={styles.head}>
        <div><p className="eyebrow">Selected work</p><h2 className="section-title">Projects I’ve worked on.</h2></div>
        <Link href="/projects"><a className="text-link">Details and stacks <span aria-hidden="true">↗</span></a></Link>
      </div>
      <div className={styles.grid}>
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </div>
    </section>

    <section className={styles.aboutBand}>
      <div className={styles.about}>
        <div className={styles.photo}><Image src="/profile.png" alt="Mercy Ogbenjuwa Ikya" layout="fill" objectFit="cover" /></div>
        <div>
          <p className="eyebrow">About</p>
          <h2 className="section-title">A product manager who can build the thing.</h2>
          <p>I align stakeholders, shape the roadmap, understand the architecture and work with engineering teams to move dependable software from idea to production.</p>
          <Link href="/about"><a className="text-link">More about me <span aria-hidden="true">→</span></a></Link>
        </div>
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.centerHead}><p className="eyebrow">What I offer</p><h2 className="section-title">Ways to work together.</h2></div>
      <div className="rows">
        {services.slice(0, 4).map((service, index) => <div className="row" key={service.title}><span className="row-index">0{index + 1}</span><div className="row-body"><h3>{service.title}</h3><p>{service.text}</p></div></div>)}
      </div>
    </section>

    <section className={`${styles.section} ${styles.flush}`}>
      <div className={styles.centerHead}><p className="eyebrow">Experience</p><h2 className="section-title">Where I’ve worked.</h2></div>
      <div className="rows">
        {experience.slice(0, 4).map((job, index) => <div className="row" key={`${job.company}-${job.duration}`}><span className="row-index">0{index + 1}</span><div className="row-body"><h3>{job.company}</h3><p>{job.role || job.workType}</p></div><span className="row-meta">{job.duration}</span></div>)}
      </div>
      <div className={styles.more}><Link href="/resume"><a className="text-link">Full experience <span aria-hidden="true">→</span></a></Link></div>
    </section>

    <section className={styles.contact}>
      <p className="eyebrow">Contact</p>
      <h2>Have a project in mind? Let’s build something useful.</h2>
      <div className={styles.actions}>
        <Link href="/contact"><a className={styles.light}>Start a conversation <span aria-hidden="true">↗</span></a></Link>
        <a className="text-link" href="mailto:ogbenjuwamercyonyoibo@gmail.com">Email me <span aria-hidden="true">→</span></a>
      </div>
    </section>
  </>;
}

export async function getStaticProps() {
  return { props: { title: "Mercy Ogbenjuwa Ikya", projects: getProjects() } };
}
