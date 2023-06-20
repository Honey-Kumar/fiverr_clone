import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="mb-auto w-full mx-auto">
      <Component {...pageProps} />
    </div>
  );
}
