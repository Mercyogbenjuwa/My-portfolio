import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Layout.module.css";

const navigation = [["Work", "/projects"], ["About", "/about"], ["Experience", "/resume"]];
const footerLinks = [["Email", "mailto:ogbenjuwamercyonyoibo@gmail.com"], ["Phone", "tel:+2349027918134"], ["GitHub", "https://github.com/Mercyogbenjuwa"], ["LinkedIn", "https://www.linkedin.com/in/mercy-ogbenjuwa-178805227"]];

export default function Layout({ children }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [router.asPath]);
  useEffect(() => {
    if (!open) return undefined;
    const close = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.bar}>
          <nav className={styles.nav} aria-label="Main navigation">
            <Link href="/"><a className={styles.brand}>
              {/* eslint-disable-next-line @next/next/no-img-element -- small static SVG mark */}
              <img src="/logo-mark.svg" alt="" width="34" height="34" />Mercy Ogbenjuwa Ikya
            </a></Link>
            <div className={styles.links}>
              {navigation.map(([label, href]) => <Link href={href} key={href}><a className={router.pathname === href ? styles.active : ""}>{label}</a></Link>)}
            </div>
            <Link href="/contact"><a className={styles.contact}>Contact <span aria-hidden="true">↗</span></a></Link>
            <button type="button" className={`${styles.menuButton} ${open ? styles.isOpen : ""}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
              <span /><span /><span />
            </button>
          </nav>
          <div id="mobile-menu" className={`${styles.menu} ${open ? styles.menuOpen : ""}`} hidden={!open}>
            {[...navigation, ["Contact", "/contact"]].map(([label, href], index) => <Link href={href} key={href}><a className={router.pathname === href ? styles.current : ""} style={{ "--i": index }}>{label}<span aria-hidden="true">→</span></a></Link>)}
          </div>
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
