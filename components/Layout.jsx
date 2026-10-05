import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Layout.module.css";

const navigation = [["Work", "/projects"], ["About", "/about"], ["Experience", "/resume"]];
const footerLinks = [["Email", "mailto:ogbenjuwamercyonyoibo@gmail.com"], ["Phone", "tel:+2349027918134"], ["GitHub", "https://github.com/Mercyogbenjuwa"], ["LinkedIn", "https://www.linkedin.com/in/mercy-ogbenjuwa-178805227"]];

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.bar}>
          <nav className={styles.nav} aria-label="Main navigation">
            <Link href="/"><a className={styles.brand}>Mercy Ogbenjuwa Ikya</a></Link>
            <div className={styles.links}>
              {navigation.map(([label, href]) => <Link href={href} key={href}><a className={router.pathname === href ? styles.active : ""}>{label}</a></Link>)}
            </div>
            <Link href="/contact"><a className={styles.contact}>Contact <span aria-hidden="true">↗</span></a></Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Mercy Ogbenjuwa Ikya</span>
        <div className={styles.footerLinks}>
          {footerLinks.map(([label, href]) => <a key={label} href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>{label}</a>)}
        </div>
      </footer>
    </div>
  );
}
