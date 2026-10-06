import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Head from "../components/Head";
import useReveal from "../lib/useReveal";
import "../styles/globals.css";
import "../styles/themes.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useReveal(router.asPath);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <Layout>
      <Head title={pageProps.title || "Mercy Ogbenjuwa Ikya"} description={pageProps.description} noindex={pageProps.noindex} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
