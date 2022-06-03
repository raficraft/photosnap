import "../styles/globals.css";
import "../styles/designSystem.css";
import Layout from "../core/components/Layout/Layout";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [appIsloaded, setAppIsloaded] = useState(false);

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      setAppIsloaded(true);
    });
  }, []);

  appIsloaded && (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );

  return <h1>Loading</h1>;
}

export default MyApp;
