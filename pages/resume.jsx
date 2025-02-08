import styles from "../styles/ResumePage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles["education-section"]}>
        <h3 className={styles.heading}>Education History</h3>
        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Bsc. in Computer Science</h4>
          <div>Bingham University</div>
        </div>
      </div>

      <div className={styles["work-section"]}>
        <h3 className={styles.heading}>Professional Experience</h3>
        <div className={styles.item}>
          <h4 className={styles.resumeHead}>CSCS</h4>
          <div>Hybrid</div>
          <div>Fullstack Engineer</div>
          <div>JAN . 2024 - Present</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Optimus Bank</h4>
          <div>Full-Time</div>
          <div>Software Engineer</div>
          <div>SEP. 2022 - DEC 2023</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Talosmart</h4>
          <div>Remote</div>
          <div>Software Engineer</div>
          <div>SEP. 2021 - SEP 2022</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Heirs Life & Heirs General Insurance</h4>
          <div>Contract</div>
          <div>Technical Support</div>
          <div>JAN. 2021 - AUGUST 2021</div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

// Fetch static props if needed for SSR or static generation
export async function getStaticProps() {
    return {
      props: { title: 'Resume' },
    };
}
