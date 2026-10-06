import { education, experience } from "../lib/content";
import styles from "../styles/ResumePage.module.css";

export default function ResumePage() {
  return (
    <div className="page">
      <header className="arrive">
        <p className="eyebrow eyebrow-line">Experience</p>
        <h1 className="page-title">Where I’ve worked.</h1>
        <p className="lead">From insurance and banking to capital markets, and now my own company.</p>
      </header>
      <section className={styles.block}>
        <div className="rows">
          {experience.map((job, index) => (
            <div className="row" key={`${job.company}-${job.duration}`} data-reveal style={{ "--d": `${index * 0.05}s` }}>
              <span className="row-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="row-body"><h3>{job.company}</h3><p>{[job.role, job.workType, job.location].filter(Boolean).join(" · ")}</p></div>
              <span className="row-meta">{job.duration}</span>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.block}>
        <p className={`eyebrow ${styles.label}`}>Education</p>
        <div className="rows">
          {education.map((item) => <div className="row" key={item.degree}><span className="row-index">01</span><div className="row-body"><h3>{item.degree}</h3><p>{item.school}</p></div></div>)}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() { return { props: { title: "Experience", description: "Work experience of Mercy Ogbenjuwa Ikya across banking, capital markets, ERP, observability and business platforms." } }; }
