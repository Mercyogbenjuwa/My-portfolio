import styles from "../styles/ContactPage.module.css";

const services = ["Product strategy & delivery", "Web and mobile applications", "Backend systems & APIs", "ERP and workflow automation", "Cloud, DevOps & monitoring", "Technical product consulting"];
const channels = [
  { label: "Email", value: "ogbenjuwamercyonyoibo@gmail.com", href: "mailto:ogbenjuwamercyonyoibo@gmail.com" },
  { label: "Phone", value: "+234 902 791 8134", href: "tel:+2349027918134" },
  { label: "LinkedIn", value: "Mercy Ogbenjuwa", href: "https://www.linkedin.com/in/mercy-ogbenjuwa-178805227" },
  { label: "GitHub", value: "@Mercyogbenjuwa", href: "https://github.com/Mercyogbenjuwa" },
];

export default function ContactPage() {
  const submitForm = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const service = form.get("service");
    const details = form.get("details");
    const subject = `${service} enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nProject details:\n${details}`;
    const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ogbenjuwamercyonyoibo@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(composeUrl, "_blank", "noopener,noreferrer");
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
          <h2>Send a project enquiry</h2>
          <p>This opens a Gmail draft with your details, ready for you to send.</p>
          <form className={styles.form} onSubmit={submitForm}>
            <div className={styles.row}>
              <label><span>Your name</span><input name="name" type="text" placeholder="Jane Smith" required /></label>
              <label><span>Email address</span><input name="email" type="email" placeholder="jane@company.com" required /></label>
            </div>
            <label><span>What do you need?</span><select name="service" defaultValue="" required><option value="" disabled>Choose a service</option>{services.map((service) => <option value={service} key={service}>{service}</option>)}</select></label>
            <label><span>Project details</span><textarea name="details" rows="5" placeholder="What are you building, what’s in the way, and when do you need it?" required /></label>
            <button type="submit">Send enquiry <span aria-hidden="true">↗</span></button>
          </form>
        </section>
      </div>
    </div>
  );
}

export async function getStaticProps() { return { props: { title: "Contact" } }; }
