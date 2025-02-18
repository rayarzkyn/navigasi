import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800">About Me</h1>
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg space-y-6">
        <p className="text-lg text-gray-700">
          Halo! Saya Raya Rizkyana, seorang mahasiswa semester 4 yang sangat tertarik dengan pengembangan web, desain antarmuka pengguna (UI/UX), dan administrasi database.
        </p>
        <p className="text-lg text-gray-700">
          Saya memiliki semangat untuk menciptakan solusi kreatif yang membantu bisnis dan individu dalam mencapai tujuan mereka melalui teknologi. 
          Di bidang pengembangan web, saya memiliki pengalaman dalam menggunakan teknologi seperti <span className="font-semibold text-indigo-800">HTML, CSS, JavaScript, dan React.js</span>. 
          Selain itu, saya juga berfokus pada desain UI/UX untuk menciptakan pengalaman pengguna yang lebih baik dan menarik.
        </p>
        <p className="text-lg text-gray-700">
          Sebagai seorang mahasiswa, saya terus belajar dan berkembang, dan saya berharap dapat mengaplikasikan keterampilan saya dalam proyek-proyek dunia nyata. 
          Saat ini, saya bersemangat untuk mengeksplorasi lebih jauh tentang pengembangan web dan UI/UX design.
        </p>
        
        {/* Tombol Kembali ke Index */}
        <div className="mt-6 text-center">
          <Link href="/" className="px-6 py-2 bg-indigo-800 text-white rounded-full hover:bg-indigo-600 transition duration-300">
            Kembali ke Home
          </Link>
        </div>
      </div>
    </div>
  );
}
