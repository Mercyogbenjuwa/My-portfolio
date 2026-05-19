import styles from "../styles/ResumePage.module.css";

const educationHistory = [
  {
    degree: "BSc. in Computer Science",
    school: "Bingham University",
  },
];

const professionalExperience = [
  {
    company: "Nathan Claire Africa",
    location: "London, United Kingdom",
    workType: "Full-time",
    role: "Product Manager",
    duration: "JAN. 2026 - PRESENT",
  },
  {
    company: "Nathan Claire Africa",
    location: "London, United Kingdom",
    workType: "Contract",
    role: "Software Engineer",
    duration: "APR. 2025 - DEC. 2025",
  },
  {
    company: "Central Securities Clearing System",
    location: "Lagos, Nigeria",
    workType: "Full-time",
    role: "Full Stack Product Engineer",
    duration: "JAN. 2024 - DEC. 2025",
  },
  {
    company: "Optimus Bank",
    location: "Lagos, Nigeria",
    workType: "Full-time",
    role: "Software Engineer",
    duration: "SEP. 2022 - DEC. 2023",
  },
  {
    company: "Talosmart",
    location: "Remote",
    workType: "Full-time",
    role: "Software Engineer",
    duration: "SEP. 2021 - SEP. 2022",
  },
  {
    company: "Heirs Life & Heirs General Insurance",
    location: "Abuja, Nigeria",
    workType: "Contract",
    role: "Technical Support",
    duration: "JAN. 2021 - AUG. 2021",
  },
];

const ResumePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles["education-section"]}>
        <h3 className={styles.heading}>Education History</h3>

        {educationHistory.map((education) => (
          <div className={styles.item} key={education.degree}>
            <h4 className={styles.resumeHead}>{education.degree}</h4>
            <div>{education.school}</div>
          </div>
        ))}
      </div>

      <div className={styles["work-section"]}>
        <h3 className={styles.heading}>Professional Experience</h3>

        {professionalExperience.map((experience) => (
          <div
            className={styles.item}
            key={`${experience.company}-${experience.role}-${experience.duration}`}
          >
            <h4 className={styles.resumeHead}>{experience.company}</h4>
            <div>{experience.location}</div>
            <div>{experience.workType}</div>
            <div>{experience.role}</div>
            <div>{experience.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumePage;

export async function getStaticProps() {
  return {
    props: { title: "Resume" },
  };
}