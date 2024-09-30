import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch-com";
import { FaBars, FaTimes } from "react-icons/fa"; // Para los íconos del menú
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-deepblue-600 p-2 sm:p-4 w-full fixed z-10 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center max-w-full">
        <div className="text-white text-xl font-bold">
          <Link href="#/" legacyBehavior>
            <a>ClauDev</a>
          </Link>
        </div>
        <div
          className="sm:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div
          id="links-menu"
          className={`space-x-2 sm:space-x-4 flex-col sm:flex-row flex sm:flex items-center absolute sm:static top-12 left-0 w-full sm:w-auto bg-deepblue-600 sm:bg-transparent sm:p-0 p-4 transition-transform duration-300 ${
            menuOpen ? 'flex' : 'hidden'
          }`}
        >
          <Link href="#projects" legacyBehavior>
            <a className="text-white hover:text-deepblue-400">Projects</a>
          </Link>
          <Link href="#stack" legacyBehavior>
            <a className="text-white hover:text-deepblue-400">Stack</a>
          </Link>
          <Link href="#education" legacyBehavior>
            <a className="text-white hover:text-deepblue-400">Education</a>
          </Link>
          <Link href="#footer" legacyBehavior>
            <a className="text-white hover:text-deepblue-400">Contact</a>
          </Link>
          <div className="w-8 h-8 rounded-full border-2 dark:border-white bg-white dark:bg-black flex justify-center items-center cursor-pointer">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
