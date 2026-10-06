import { useState } from "react";
import ServiceSelect from "../components/ServiceSelect";
import styles from "../styles/ContactPage.module.css";

const services = ["Product strategy & delivery", "Web and mobile applications", "Backend systems & APIs", "ERP and workflow automation", "Cloud, DevOps & monitoring", "Technical product consulting"];
const channels = [
  { label: "Email", value: "ogbenjuwamercyonyoibo@gmail.com", href: "mailto:ogbenjuwamercyonyoibo@gmail.com" },
  { label: "Phone", value: "+234 902 791 8134", href: "tel:+2349027918134" },
  { label: "LinkedIn", value: "Mercy Ogbenjuwa", href: "https://www.linkedin.com/in/mercy-ogbenjuwa-178805227" },
  { label: "GitHub", value: "@Mercyogbenjuwa", href: "https://github.com/Mercyogbenjuwa" },
];

export default function ContactPage() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [serviceMissing, setServiceMissing] = useState(false);

  const submitForm = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (!data.service) { setServiceMissing(true); return; }
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Your message couldn’t be sent.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err.message || "Your message couldn’t be sent.");
      setStatus("idle");
    }
  };

  return (
    <div className="page">
      <header className={`${styles.header} arrive`}>
        <p className="eyebrow eyebrow-line">Contact</p>
        <h1 className="page-title">Let’s build something useful.</h1>
        <p className="lead">Tell me about the product you want to build or the system you want to fix.</p>
      </header>

      <div className={styles.layout}>
        <aside className={styles.channels}>
          {channels.map((channel, index) => (
            <a key={channel.label} className={styles.channel} href={channel.href} data-reveal style={{ "--d": `${index * 0.07}s` }} {...(channel.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
              <span>{channel.label}</span>
              <strong>{channel.value}</strong>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
          <p className={styles.status} data-reveal><i aria-hidden="true" />Open to new projects</p>
        </aside>

        <section className={styles.card} data-reveal style={{ "--d": ".1s" }}>
          {status === "sent" ? (
            <div className={styles.sent} role="status">
              <span aria-hidden="true">✓</span>
              <h2>Thanks, your message is on its way.</h2>
              <p>I’ll reply to the email address you gave me.</p>
              <button type="button" className="text-link" onClick={() => setStatus("idle")}>Send another <span aria-hidden="true">→</span></button>
            </div>
          ) : <>
          <h2>Send a project enquiry</h2>
          <p>Tell me a little about it and I’ll get back to you.</p>
          <form className={styles.form} onSubmit={submitForm}>
            <input className={styles.trap} type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <div className={styles.row}>
              <label><span>Your name</span><input name="name" type="text" placeholder="Jane Smith" maxLength={120} required /></label>
              <label><span>Email address</span><input name="email" type="email" placeholder="jane@company.com" maxLength={200} required /></label>
            </div>
            <div><span className={styles.label}>What do you need?</span><ServiceSelect name="service" options={services} placeholder="Choose a service" invalid={serviceMissing} onChange={() => setServiceMissing(false)} />{serviceMissing && <small className={styles.error}>Please choose a service.</small>}</div>
            <label><span>Project details</span><textarea name="details" rows="5" maxLength={5000} placeholder="What are you building, what’s in the way, and when do you need it?" required /></label>
            {error && <p className={styles.error} role="alert">{error} <a href="mailto:ogbenjuwamercyonyoibo@gmail.com">Email me instead</a></p>}
            <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : <>Send enquiry <span aria-hidden="true">↗</span></>}</button>
          </form>
          </>}
        </section>
      </div>
    </div>
  );
}

export async function getStaticProps() { return { props: { title: "Contact", description: "Contact Mercy Ogbenjuwa Ikya about product strategy, web and mobile apps, backend systems, ERP and cloud work." } }; }
