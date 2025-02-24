// components/Navbar.js
import Link from "next/link";
import { Home, User, Wrench, Briefcase, Mail, Code } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-indigo-800 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Raya Rizkyana</h1>
        <ul className="flex space-x-6">
          <li><Link href="/" className="flex items-center space-x-2 hover:text-gray-300"><Home size={20} /> <span>Home</span></Link></li>
          <li><Link href="/about" className="flex items-center space-x-2 hover:text-gray-300"><User size={20} /> <span>About</span></Link></li>
          <li><Link href="/skills" className="flex items-center space-x-2 hover:text-gray-300"><Code size={20} /> <span>Skills</span></Link></li>
          <li><Link href="/services" className="flex items-center space-x-2 hover:text-gray-300"><Wrench size={20} /> <span>Services</span></Link></li>
          <li><Link href="/portfolio" className="flex items-center space-x-2 hover:text-gray-300"><Briefcase size={20} /> <span>Portfolio</span></Link></li>
          <li><Link href="/contact" className="flex items-center space-x-2 hover:text-gray-300"><Mail size={20} /> <span>Contact</span></Link></li>
        </ul>
      </div>
    </nav>
  );
}
