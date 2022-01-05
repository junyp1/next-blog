import React from "react";
import NavBar from "../components/NavBar";
import Head from "next/head";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/favicon.ico"></link>
      </Head>
      <header>
        <NavBar></NavBar>
      </header>
      <Component {...pageProps}></Component>
    </>
  );
};

export default App;
