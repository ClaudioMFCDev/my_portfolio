import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch-com";

export default function Navbar() {
  return (
    <nav className="bg-deepblue-600 p-4 w-full fixed z-10 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="#/" legacyBehavior>
            <a>Clau_Dev</a>
          </Link>
        </div>
        <div id="links-menu" className="space-x-4 flex items-center">
          <Link href="#projects" legacyBehavior>
            <a className="text-white hover:text-deepblue-400">Projects</a>
          </Link>
          <Link href="#education" legacyBehavior>
            <a className="text-white hover:text-deepblue-400">Education</a>
          </Link>
          <Link href="#contact" legacyBehavior>
            <a className="text-white hover:text-deepblue-400">Contact</a>
          </Link>
          <div className="w-8 h-8 rounded-full border-2 border-white flex justify-center items-center cursor-pointer">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
