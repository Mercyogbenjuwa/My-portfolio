import Image from "next/image";
import styles from "../styles/About.module.css";
import profileImage from "../public/profile.png";

const profileDetails = [
  {
    label: "Name",
    value: "Mercy Ogbenjuwa Ikya",
  },
  {
    label: "Role",
    value: "Product Manager | Senior Product Engineer",
  },
  {
    label: "College Degree",
    value: "BSc. in Computer Science",
  },
  {
    label: "Availability",
    value: "Full-time, Contract, Remote & Hybrid",
  },
];

const skillsSummary = [
  {
    name: "Product Management",
    level: "100%",
  },
  {
    name: "Full-Stack Engineering",
    level: "100%",
  },
  {
    name: "Backend & API Development",
    level: "100%",
  },
  {
    name: "Frontend Engineering",
    level: "100%",
  },
  {
    name: "DevOps, Cloud & Monitoring",
    level: "100%",
  },
  {
    name: "Quality Assurance",
    level: "100%",
  },
];

const technicalSkills = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: ".NET",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  },
  {
    name: "Go",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    name: "Gin",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    name: "Fiber",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    name: "Echo",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "NestJS",
    icon: "https://nestjs.com/img/logo-small.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Microsoft SQL Server",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  },
  {
    name: "Oracle",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  },
  {
    name: "Directus",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Bash",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
  },
  {
    name: "NPM",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Zoho Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg",
  },
];

const productSkills = [
  "Backlog Management",
  "Sprint Planning",
  "User Stories",
  "Acceptance Criteria",
  "Product Roadmapping",
  "Stakeholder Management",
  "ERP Delivery",
  "Monitoring Platforms",
  "Workflow Automation",
  "Team Leadership",
];

export default function AboutMe() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageContainer} data-aos="fade-right">
            <Image
              src={profileImage}
              alt="Mercy Ogbenjuwa Ikya"
              width={150}
              height={170}
              priority
              className={styles.myImage}
            />
          </div>

          <div className={styles.textContainer} data-aos="fade-left">
            <h3 className={styles.textHead}>
              Product Manager & Senior Product Engineer
            </h3>

            <ul className={styles.list}>
              {profileDetails.slice(0, 3).map((detail) => (
                <li className={styles.listItem} key={detail.label}>
                  <i className={`${styles.icon} bi bi-chevron-right`}></i>
                  <span>
                    <strong className={styles.strong}>{detail.label}: </strong>
                    {detail.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.textContainer} data-aos="fade-left">
            <ul className={styles.list}>
              {profileDetails.slice(3).map((detail) => (
                <li className={styles.listItem} key={detail.label}>
                  <i className={`${styles.icon} bi bi-chevron-right`}></i>
                  <span>
                    <strong className={styles.strong}>{detail.label}: </strong>
                    {detail.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.paragraph}>
          I am a product-focused software engineer with over 6 years of
          experience building financial platforms, ERP systems, monitoring
          tools, court process solutions, and business workflow applications. I
          work across product delivery, full-stack engineering, backend systems,
          DevOps, cloud, QA, and stakeholder management, with a strong focus on
          building reliable products that improve operations, support growth,
          and create measurable business value.
        </div>

        <div className={styles.skillsSection}>
          <h2 className={styles.skillsSection2}>
            <span>Skills Summary</span>
          </h2>

          <div className={styles.skillsGrid}>
            {skillsSummary.map((skill) => (
              <div className={styles.skill} key={skill.name}>
                <span className={styles.skillName}>{skill.name}</span>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progress}
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <section id="skills">
            <h2 className={styles.skillsSection2}>
              <span>Technical Skills</span>
            </h2>

            <div className={styles.skills}>
              {technicalSkills.map((skill) => (
                <div className={styles.skill2} key={skill.name}>
                  <img src={skill.icon} alt={`${skill.name} logo`} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="product-skills">
            <h2 className={styles.skillsSection2}>
              <span>Product & Delivery Skills</span>
            </h2>

            <div className={styles.skills}>
              {productSkills.map((skill) => (
                <div className={styles.skill2} key={skill}>
                  <p>{skill}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}