import Navbar from "../components/navbar";
import "../styles/globals.css"; // Pastikan Tailwind sudah di-import

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="pt-16"> {/* Padding agar tidak tertutup Navbar */}
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
