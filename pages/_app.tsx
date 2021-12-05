import "tailwindcss/tailwind.css";
import "../src/styles/base.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
