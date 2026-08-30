import Image from "next/image";
import Link from "next/link";
import styles from "../styles/HomePage.module.css";

const capabilities = ["Product strategy", "Full-stack engineering", "Financial platforms", "Enterprise systems", "Cloud & observability"];

export default function HomePage() {
  return <>
    <section className={styles.hero}>
      <div className={styles.heroCopy}><p className="eyebrow">Product leader · Software engineer</p><h1>I turn complex operations into <em>clear, reliable products.</em></h1><p className={styles.intro}>I’m Mercy — a Product Manager and Senior Product Engineer with 6+ years of experience shipping financial, enterprise and operational platforms.</p><div className={styles.actions}><Link href="/projects"><a className="button">Explore my work <span>↗</span></a></Link><Link href="/contact"><a className="button secondary">Let’s work together</a></Link></div></div>
      <div className={styles.portrait}><div className={styles.imageWrap}><Image src="/profile.png" alt="Mercy Ogbenjuwa" layout="fill" objectFit="cover" priority /></div><div className={styles.note}><span>Currently</span><strong>Leading product delivery at Nathan Claire Africa</strong></div></div>
    </section>
    <section className={styles.marquee} aria-label="Areas of expertise">{capabilities.map((item)=><span key={item}>{item}<b>✦</b></span>)}</section>
    <section className={styles.snapshot}>
      <div><p className="eyebrow">A practical builder</p><h2>Strategy in one hand.<br/>Execution in the other.</h2></div>
      <div className={styles.stats}><div><strong>6+</strong><span>Years building products</span></div><div><strong>5</strong><span>Major platforms delivered</span></div><div><strong>360°</strong><span>Product-to-production ownership</span></div></div>
      <p>I work across discovery, roadmaps, system design, frontend, backend, cloud, quality and stakeholder delivery. The result is software that works for both the business and the people using it.</p>
    </section>
    <section className={styles.featured}><div className={styles.sectionHead}><div><p className="eyebrow">Selected work</p><h2>Products built for real operations.</h2></div><Link href="/projects"><a>View all projects →</a></Link></div>
      <div className={styles.projectGrid}><Link href="/projects"><a className={styles.project}><span>01 · Monitoring &amp; DevOps</span><h3>Edge Monitoring</h3><p>Unified infrastructure, application, log and database observability for faster incident response.</p><b>View case study ↗</b></a></Link><Link href="/projects"><a className={`${styles.project} ${styles.alt}`}><span>02 · Business platform</span><h3>El‑Raboni Resources</h3><p>A polished digital presence connecting customers with the company’s resources and services.</p><b>View project ↗</b></a></Link></div>
    </section>
  </>;
}
export async function getStaticProps(){return{props:{title:"Mercy Ogbenjuwa Ikya"}}}
