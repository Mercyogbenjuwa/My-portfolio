import styles from "../styles/ContactPage.module.css";

const services = ["Product strategy & delivery", "Web and mobile applications", "Backend systems & APIs", "ERP and workflow automation", "Cloud, DevOps & monitoring", "Technical product consulting"];

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
    <div className={styles.page}>
      <section className={styles.intro}>
        <p className="eyebrow">Start a conversation</p>
        <h1>Have a product to build or a difficult system to improve?</h1>
        <p>I help teams turn business needs into dependable digital products—from early product thinking through engineering and launch.</p>
        <div className={styles.direct}>
          <span>Contact me directly</span>
          <a href="mailto:ogbenjuwamercyonyoibo@gmail.com">ogbenjuwamercyonyoibo@gmail.com ↗</a>
          <br />
          <a href="tel:+2349027918134">+234 902 791 8134 ↗</a>
        </div>
      </section>

      <section className={styles.card}>
        <div className={styles.cardHead}><span>Available for new projects</span><b aria-hidden="true" /></div>
        <h2>Tell me what you’re working on.</h2>
        <p>Share your goal, timeline and where you need support. I’ll prepare a secure Gmail draft with your enquiry, ready for you to review and send.</p>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.row}><label><span>Your name</span><input name="name" type="text" placeholder="Jane Smith" required /></label><label><span>Email address</span><input name="email" type="email" placeholder="jane@company.com" required /></label></div>
          <label><span>What do you need help with?</span><select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map((service)=><option value={service} key={service}>{service}</option>)}</select></label>
          <label><span>Project details</span><textarea name="details" rows="6" placeholder="A short description of the product, the challenge and your ideal timeline…" required /></label>
          <button type="submit">Send project enquiry <span aria-hidden="true">↗</span></button>
        </form>
      </section>

      <section className={styles.services}>
        <p className="eyebrow">Ways I can help</p>
        <div>{services.map((service,index)=><span key={service}><b>0{index+1}</b>{service}</span>)}</div>
      </section>
    </div>
  );
}

export async function getStaticProps(){return{props:{title:"Contact"}}}
