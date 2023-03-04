import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <title>OLBM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
