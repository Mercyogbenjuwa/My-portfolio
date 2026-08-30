import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import RepoCard from "../components/RepoCard";
import styles from "../styles/GithubPage.module.css";

const GITHUB_USERNAME =
  process.env.NEXT_PUBLIC_GITHUB_USERNAME || "Mercyogbenjuwa";

const fallbackUser = {
  login: "Mercyogbenjuwa",
  avatar_url: "https://github.com/Mercyogbenjuwa.png",
  public_repos: 0,
  followers: 0,
};

const getGithubHeaders = () => {
  const headers = {
    Accept: "application/vnd.github+json",
  };

  if (process.env.GITHUB_API_KEY) {
    headers.Authorization = `Bearer ${process.env.GITHUB_API_KEY}`;
  }

  return headers;
};

const GithubPage = ({ repos = [], user = fallbackUser }) => {
  const githubUser = user || fallbackUser;

  const theme = {
    level0: "#161B22",
    level1: "#0e4429",
    level2: "#006d32",
    level3: "#26a641",
    level4: "#39d353",
  };

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={githubUser.avatar_url}
            className={styles.avatar}
            alt={githubUser.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{githubUser.login}</h3>
        </div>

        <div>
          <h3>{githubUser.public_repos} repos</h3>
        </div>

        <div>
          <h3>{githubUser.followers} followers</h3>
        </div>
      </div>

      <div className={styles.container}>
        {repos.length > 0 ? (
          repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)
        ) : (
          <p>No repositories available at the moment.</p>
        )}
      </div>

      <div className={styles.contributions}>
        <GitHubCalendar
          username={GITHUB_USERNAME}
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const headers = getGithubHeaders();

    const userRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      { headers }
    );

    let user = fallbackUser;

    if (userRes.ok) {
      user = await userRes.json();
    } else {
      console.warn(`Failed to fetch GitHub user data: ${userRes.status}`);
    }

    const repoRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
      { headers }
    );

    let repos = [];

    if (repoRes.ok) {
      repos = await repoRes.json();

      repos = repos
        .filter((repo) => !repo.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 8);
    } else {
      console.warn(`Failed to fetch GitHub repos: ${repoRes.status}`);
    }

    return {
      props: {
        title: "GitHub",
        repos,
        user,
      },
    };
  } catch (error) {
    console.error("GitHub page build fallback:", error.message);

    return {
      props: {
        title: "GitHub",
        repos: [],
        user: fallbackUser,
      },
    };
  }
}

export default GithubPage;
