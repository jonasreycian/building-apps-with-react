import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  // console.log(`${JSON.stringify(pageProps)}`);
  return <Component {...pageProps} />;
}
