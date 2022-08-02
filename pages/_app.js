import "../styles/globals.css";
import Context from "../components/context/Context";
function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  );
}

export default MyApp;
