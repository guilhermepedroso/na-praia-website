import { AppProps } from "next/dist/shared/lib/router/router";
import "tailwindcss/tailwind.css";
import { Footer } from "../src/components/footer";
import { Header } from "../src/components/header";
import "../src/styles/base.css";

function MyApp({ Component, pageProps, router }: AppProps) {
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
