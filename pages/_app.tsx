import "tailwindcss/tailwind.css";
import { Footer } from "../src/components/footer";
import { Header } from "../src/components/header";
import "../src/styles/base.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
