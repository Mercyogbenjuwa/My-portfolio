import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.css";

const strengths = ["Product strategy", "Full-stack engineering", "Backend & APIs", "Cloud & observability", "ERP & workflows", "Quality & delivery"];
const facts = ["Based in Lagos · Working globally", "BSc Computer Science", "Open to full-time, contract, remote & hybrid"];

export default function AboutPage() {
  return <>
    <div className="page">
      <section className={`${styles.hero} arrive`}>
        <div>
          <p className="eyebrow eyebrow-line">About Mercy</p>
          <h1 className="page-title">A product manager who can build the thing.</h1>
          <p>I’m the founder of Juwa Tech, a product manager and a senior product engineer. I’ve worked on banking and capital-markets platforms, ERP systems, monitoring tools and business apps.</p>
          <p>My strength is range. I can align stakeholders, shape the roadmap, read the architecture and work side by side with engineers until the product ships.</p>
          <div className={styles.facts}>{facts.map((fact) => <span key={fact}>{fact}</span>)}</div>
          <div className={styles.actions}>
            <Link href="/projects"><a className="button">See selected work <span aria-hidden="true">↗</span></a></Link>
            <Link href="/contact"><a className="text-link">Work with me <span aria-hidden="true">→</span></a></Link>
          </div>
        </div>
        <div className={styles.portrait}><Image src="/profile.png" alt="Mercy Ogbenjuwa Ikya" layout="fill" objectFit="cover" priority /></div>
      </section>
    </div>
    <section className={styles.focus}>
      <div className={styles.centerHead} data-reveal><p className="eyebrow">What I bring</p><h2 className="section-title">From messy requirements to a product people can trust.</h2></div>
      <div className="rows">{strengths.map((item, index) => <div className="row" key={item} data-reveal style={{ "--d": `${index * 0.05}s` }}><span className="row-index">0{index + 1}</span><div className="row-body"><h3>{item}</h3></div></div>)}</div>
    </section>
  </>;
}

export async function getStaticProps() { return { props: { title: "About" } }; }
