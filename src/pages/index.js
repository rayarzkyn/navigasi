import React, { useState } from "react";
import Link from "next/link"; // Gunakan Link untuk routing internal

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk toggle menu

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Mengubah state saat menu di-click
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 flex flex-col items-center p-6">
      
      {/* Konten */}
      <h2 className="text-4xl font-bold mb-6 text-center text-indigo-800">Selamat Datang di CV Saya!</h2>
      <p className="text-lg text-gray-700 text-center leading-relaxed space-y-6">
        <span>
          Halo! Saya Raya Rizkyana, seorang{" "}
          <span className="font-semibold text-indigo-800">Web Developer & UI/UX Designer</span> dengan pengalaman dalam{" "}
          <span className="font-semibold text-indigo-800">pengembangan website, desain antarmuka pengguna, dan administrasi database</span>.
        </span>

        <span>
          Saya memiliki passion dalam menciptakan solusi kreatif dan inovatif untuk membantu bisnis dan individu mencapai tujuan mereka. 
          Dengan keahlian di bidang{" "}
          <span className="font-semibold text-indigo-800">HTML, CSS, JavaScript, UI/UX Design, serta Database Administration</span>, 
          saya siap memberikan hasil terbaik dalam setiap proyek yang saya kerjakan.
        </span>

        <div className="border-t-2 border-indigo-800 pt-6">
          <h3 className="text-2xl font-bold text-indigo-800 mb-4">Apa yang Saya Tawarkan?</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-green-600 text-xl mr-3">✅</span>
              <span>Pembuatan Website Profesional – Website responsif, cepat, dan modern sesuai kebutuhan bisnis Anda.</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 text-xl mr-3">✅</span>
              <span>Desain UI/UX yang Menarik – Pengalaman pengguna yang intuitif dan desain yang estetis.</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 text-xl mr-3">✅</span>
              <span>Administrasi Database – Pengelolaan dan optimasi database untuk performa yang lebih baik.</span>
            </li>
          </ul>
        </div>
      </p>

      {/* Call to Action */}
      <section id="cta" className="mt-12 p-6 bg-indigo-800 text-white rounded-lg w-full max-w-3xl text-center">
        <h3 className="text-3xl font-bold mb-4">Siap Memulai Proyek Anda?</h3>
        <p className="text-lg mb-4">Mari bekerja sama untuk menciptakan sesuatu yang luar biasa! Apakah itu website baru, desain ulang, atau optimasi pengalaman pengguna, saya siap membantu Anda setiap langkahnya.</p>
        <Link href="/contact">
          <span className="px-8 py-3 bg-green-500 rounded-full text-lg hover:bg-green-600 transition duration-300">Hubungi Saya</span>
        </Link>
      </section>

      {/* Proyek yang Sedang Dikerjakan */}
      <section id="projects" className="mt-12 p-6 bg-white shadow-md rounded-lg w-full max-w-3xl">
        <h3 className="text-2xl font-bold text-indigo-800 mb-4">Proyek yang Sedang Dikerjakan</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-gray-800">Pengembangan Website E-Commerce</h4>
            <p className="text-sm text-gray-600">Sedang Dikerjakan</p>
          </div>
          <p className="text-gray-700">
            Saat ini saya sedang mengerjakan website e-commerce untuk sebuah merek ritel global, fokus pada performa dan skalabilitas tinggi.
          </p>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-gray-800">Redesain UI/UX untuk Startup Teknologi</h4>
            <p className="text-sm text-gray-600">Sedang Dikerjakan</p>
          </div>
          <p className="text-gray-700">
            Redesain UI/UX lengkap untuk meningkatkan pengalaman pengguna dan menyederhanakan antarmuka untuk sebuah startup teknologi inovatif.
          </p>
        </div>
      </section>

      {/* Blog atau Artikel Terkait */}
      <section id="blog" className="mt-12 p-6 bg-white shadow-md rounded-lg w-full max-w-3xl">
        <h3 className="text-2xl font-bold text-indigo-800 mb-4">Artikel Terbaru</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-gray-800">5 Tips Desain Web Esensial untuk Pengalaman Pengguna Modern</h4>
            <Link href="/blog/essential-design-tips">
              <span className="text-indigo-700 hover:underline">Baca Selengkapnya</span>
            </Link>
          </div>
          <p className="text-gray-700">
            Pelajari praktik terbaik untuk menciptakan desain web yang modern dan ramah pengguna yang akan mengesankan pengunjung Anda.
          </p>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-gray-800">Optimalkan Website Anda untuk Kecepatan dan Performa</h4>
            <Link href="/blog/website-performance">
              <span className="text-indigo-700 hover:underline">Baca Selengkapnya</span>
            </Link>
          </div>
          <p className="text-gray-700">
            Panduan langkah demi langkah untuk mengoptimalkan waktu muat dan performa situs Anda agar pengunjung tidak kabur.
          </p>
        </div>
      </section>
    </div>
  );
}
