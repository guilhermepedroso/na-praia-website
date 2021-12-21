import { AppProps } from "next/dist/shared/lib/router/router";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import "tailwindcss/tailwind.css";
import { Footer } from "../src/components/footer";
import { Header } from "../src/components/header";
import "../src/styles/base.css";

export const pageView = (path: string) => {
  if (typeof window !== undefined) {
    // @ts-ignore
    window.dataLayer.push({
      event: "Pageview",
      pagePath: path,
      pageTitle: document.title,
    });
  }
};

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: "G-4LNEPTFW4R",
    });
  }, []);

  useEffect(() => {
    pageView(router.asPath);
  }, [router.asPath]);

  return (
    <>
      {!router.query.webview && <Header />}
      <Component {...pageProps} />
      {!router.query.webview && <Footer />}
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  return {};
};

export default MyApp;
