"use client";
import NextHead from "../components/NextHead";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextHead />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
