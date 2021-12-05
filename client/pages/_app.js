import HeadTag from "../Components/headTag/HeadTag";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadTag />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
