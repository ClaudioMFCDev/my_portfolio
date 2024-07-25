import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">
            <Link href="/" legacyBehavior>
              <a>Clau_Dev</a>
            </Link>
          </div>
          <div className="space-x-4">
            <Link href="/" legacyBehavior>
              <a className="text-white hover:text-gray-200">Home</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="text-white hover:text-gray-200">About</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="text-white hover:text-gray-200">Contact</a>
            </Link>
          </div>
        </div>
      </nav>
    );
    
}