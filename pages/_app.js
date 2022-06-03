import "../styles/globals.css";
import "../styles/designSystem.css";
import Layout from "../core/components/Layout/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeError", (e) => setLoading(false));
    router.events.on("routeChangeStart", (e) => setLoading(false));
    router.events.on("routeChangeComplete", (e) => setLoading(true));

    return () => {
      router.events.off("routeChangeError", (e) => setLoading(false));
      router.events.off("routeChangeStart", (e) => setLoading(false));
      router.events.off("routeChangeComplete", (e) => setLoading(true));
    };
  }, [router.events]);
  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
