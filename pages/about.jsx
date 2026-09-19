import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.css";

const strengths=["Product strategy","Full-stack engineering","Backend & APIs","Cloud & observability","ERP & workflows","Quality & delivery"];

export default function AboutPage(){return <div className={styles.page}>
  <section className={styles.hero}><div><p className="eyebrow">About Mercy</p><h1>A product manager who can build the thing.</h1><p>I’m the Founder of Juwa Tech, a Product Manager, and a Senior Product Engineer delivering financial platforms, ERP systems, monitoring tools, consulting solutions, and business applications.</p><p>My advantage is range: I can align stakeholders, shape the roadmap, understand the architecture, and work directly with engineering teams to move dependable software from idea to production.</p><div className={styles.actions}><Link href="/projects"><a className="button">See selected work</a></Link><Link href="/contact"><a className="button secondary">Work with me</a></Link></div></div><div className={styles.portrait}><Image src="/profile.png" alt="Mercy Ogbenjuwa Ikya" layout="fill" objectFit="cover" priority /></div></section>
  <section className={styles.focus}><div><p className="eyebrow">What I bring</p><h2>From messy requirements to a product people can trust.</h2></div><div className={styles.grid}>{strengths.map((item,index)=><div key={item}><span>0{index+1}</span><strong>{item}</strong></div>)}</div></section>
  <section className={styles.fact}><span>Based in Lagos · Working globally</span><span>BSc Computer Science</span><span>Open to full-time, contract, remote &amp; hybrid</span></section>
</div>}
export async function getStaticProps(){return{props:{title:"About"}}}
