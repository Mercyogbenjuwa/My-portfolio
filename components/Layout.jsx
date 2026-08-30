import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Layout.module.css";

const navigation = [["Home", "/"], ["Work", "/projects"], ["About", "/about"], ["Experience", "/resume"], ["Contact", "/contact"]];

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <Link href="/"><a className={styles.brand} aria-label="Mercy Ogbenjuwa Ikya, home"><span className={styles.brandMark}>MI</span><span>Mercy Ogbenjuwa Ikya</span></a></Link>
        <nav className={styles.nav} aria-label="Main navigation">
          {navigation.map(([label, href]) => <Link href={href} key={href}><a className={router.pathname === href ? styles.active : ""}>{label}</a></Link>)}
        </nav>
        <a className={styles.availability} href="mailto:ogbenjuwamercyonyoibo@gmail.com"><span aria-hidden="true" /> Available for opportunities</a>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div><strong>Mercy Ogbenjuwa Ikya</strong><p>Product Manager &amp; Senior Product Engineer</p></div>
        <div className={styles.footerLinks}><a href="mailto:ogbenjuwamercyonyoibo@gmail.com">Email</a><a href="tel:+2349027918134">Phone</a><a href="https://github.com/Mercyogbenjuwa" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/mercy-ogbenjuwa-178805227" target="_blank" rel="noreferrer">LinkedIn</a></div>
        <p>© {new Date().getFullYear()} Built with care in Lagos.</p>
      </footer>
    </div>
  );
}
