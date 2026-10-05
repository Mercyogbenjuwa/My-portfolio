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
          <p>I’m the Founder of Juwa Tech, a Product Manager, and a Senior Product Engineer delivering financial platforms, ERP systems, monitoring tools, consulting solutions, and business applications.</p>
          <p>My advantage is range: I can align stakeholders, shape the roadmap, understand the architecture, and work directly with engineering teams to move dependable software from idea to production.</p>
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
      <div className={styles.centerHead}><p className="eyebrow">What I bring</p><h2 className="section-title">From messy requirements to a product people can trust.</h2></div>
      <div className="rows">{strengths.map((item, index) => <div className="row" key={item}><span className="row-index">0{index + 1}</span><div className="row-body"><h3>{item}</h3></div></div>)}</div>
    </section>
  </>;
}

export async function getStaticProps() { return { props: { title: "About" } }; }
