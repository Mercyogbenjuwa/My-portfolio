import Image from "next/image";
import styles from "../styles/About.module.css";
import druxamb from "../public/profile.png";

export default function AboutMe() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageContainer} data-aos="fade-right">
            <Image
              src={druxamb}
              alt="About Me"
              width={150}
              height={170}
              priority
              className={styles.myImage}
            />
          </div>
          <div className={styles.textContainer} data-aos="fade-left">
            <h3 className={styles.textHead}>Full Stack Web Developer</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  <strong className={styles.strong}>Name: </strong>
                  Mercy Ogbenjuwa
                </span>
              </li>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  {" "}
                  <strong className={styles.strong}>Nationality: </strong>
                  Nigeria 🇳🇬
                </span>
              </li>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  <strong className={styles.strong}>College Degree: </strong>
                  Bsc. in Computer Science
                </span>
              </li>
            </ul>
          </div>
          <div className={styles.textContainer} data-aos="fade-left">
            <ul>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span>
                  {" "}
                  <strong className={styles.strong}>Availability: </strong>
                  Freelance, Remote, Contract & Hybrid
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.paragraph}>
          As a computer science graduate and software engineer, I build
          high-performance web platforms with precision and passion. My
          technical skills and dedication to quality ensure every project
          excels. Let's bring your digital vision to life. 
        </div>

        {/* Skills Section */}
        <div className={styles.skillsSection}>
          <h2 className={styles.skillsSection2}>
            <span>Skills Summary</span>
          </h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skill}>
              <span className={styles.skillName}>Backend Development</span>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Frontend Development</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Devops </span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Project Management</span>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Quality Assurance</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>
          <section id="skills">
            <h2 className={styles.skillsSection2}>
              <span>Skills.</span>
            </h2>
            <div className={styles.skills}>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                  alt="Skill 1"
                />
                <p>HTML</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                  alt="Skill 2"
                />
                <p>CSS</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="Skill 3"
                />
                <p>JAVASCRIPT</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="Skill 3"
                />
                <p> TYPESCRIPT</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                  alt="Skill 3"
                />
                <p>C#</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
                  alt="Skill 3"
                />
                <p>.NET</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="Skill 3"
                />
                <p>GITHUB</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                <p>GIT</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />
                <p>BASH</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                <p>NPM</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                  alt="Skill 3"
                />
                <p>BOOTSTRAP</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://nestjs.com/img/logo-small.svg" 
                alt="Skill 3" />
                <p>NESTJS</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Skill 3"
                />
                <p>NODE JS</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                <p>EXPRESS JS</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                <p>POSTGRESQL</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
                  alt="Skill 3"
                />
                <p>MONGO DB</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
                  alt="Skill 3"
                />
                <p>PRISMA</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                <p>MY SQL</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                <p>VS CODE</p>
              </div>
              <div className={styles.skill2}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
                  alt="Skill 3"
                />
                <p>Microsoft SQL SERVER</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                <p>FIGMA</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" />
                <p>ORACLE</p>
              </div>
              <div className={styles.skill2}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                <p>DOCKER</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// Fetch static props if needed for SSR or static generation
export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}
