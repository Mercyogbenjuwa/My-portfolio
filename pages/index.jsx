import Image from "next/image";
import Link from "next/link";
import TypewriterRoles from "../components/TypewriterRoles";
import styles from "../styles/HomePage.module.css";

const capabilities = ["Product strategy", "Full-stack engineering", "Financial platforms", "Enterprise systems", "Cloud & observability"];

export default function HomePage() {
  return <>
    <section className={styles.hero}>
      <div className={styles.heroCopy}><p className="eyebrow"><TypewriterRoles /></p><h1>I turn complex operations into <em>clear, reliable products.</em></h1><p className={styles.intro}>I’m Mercy — Founder of Juwa Tech, a Product Manager, and a Senior Product Engineer delivering financial, enterprise, monitoring, and operational platforms.</p><div className={styles.actions}><Link href="/projects"><a className="button">Explore my work <span>↗</span></a></Link><Link href="/contact"><a className="button secondary">Let’s work together</a></Link></div></div>
      <div className={styles.portrait}><div className={styles.imageWrap}><Image src="/profile.png" alt="Mercy Ogbenjuwa" layout="fill" objectFit="cover" priority /></div><div className={styles.note}><span>Currently</span><strong>Leading Edge product development at Nathan Claire Africa and building Juwa Tech</strong></div></div>
    </section>
    <section className={styles.marquee} aria-label="Areas of expertise">{capabilities.map((item)=><span key={item}>{item}<b>✦</b></span>)}</section>
    <section className={styles.snapshot}>
      <div><p className="eyebrow">A practical builder</p><h2>Strategy in one hand.<br/>Execution in the other.</h2></div>
      <div className={styles.stats}><div><strong>PM</strong><span>Product strategy and delivery</span></div><div><strong>ENG</strong><span>Architecture and engineering</span></div><div><strong>360°</strong><span>Product-to-production ownership</span></div></div>
      <p>I work across discovery, roadmaps, system design, frontend, backend, cloud, quality and stakeholder delivery. The result is software that works for both the business and the people using it.</p>
    </section>
    <section className={styles.featured}><div className={styles.sectionHead}><div><p className="eyebrow">Selected work</p><h2>Platforms built for real operations.</h2></div><Link href="/projects"><a>View all projects →</a></Link></div>
      <div className={styles.projectGrid}><Link href="/projects"><a className={styles.project}><span>01 · Financial platform</span><h3>CSCS Custodian Portal</h3><p>A secure operational portal for portfolios, accounts, trade activity, and cross-exchange execution.</p><b>View case study ↗</b></a></Link><Link href="/projects"><a className={`${styles.project} ${styles.alt}`}><span>02 · Banking products</span><h3>Optimus Bank</h3><p>Digital banking products spanning lending, transfers, fraud controls, and internal workflows.</p><b>View case study ↗</b></a></Link><Link href="/projects"><a className={`${styles.project} ${styles.juwa}`}><span>03 · Technology company</span><h3>Juwa Tech</h3><p>Technology services and practical business products, including the upcoming Juwa Hub platform.</p><b>View project ↗</b></a></Link></div>
    </section>
  </>;
}
export async function getStaticProps(){return{props:{title:"Mercy Ogbenjuwa Ikya"}}}
