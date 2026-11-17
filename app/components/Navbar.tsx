import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-16 w-full border-b border-gray-100 bg-white px-6 md:px-[7.5%] flex items-center justify-between">

      
      <div className="flex items-center gap-3">
        

        <span className="text-sm font-semibold text-gray-800">
          Kamohelo Sebata
        </span>
      </div>

     
      <div className="hidden md:flex items-center gap-10 text-xs font-medium text-gray-600">
        <a href="#work" className="hover:text-green-700">Work</a>
        <a href="#services" className="hover:text-green-700">Services</a>
        <a href="#about" className="hover:text-green-700">About</a>
      </div>

      
      <Link
        href="mailto:sebatasamukele488@gmail.com"
        className="rounded-full bg-green-800 px-5 py-2.5 text-xs font-semibold text-white hover:bg-green-900 transition"
      >
        Let's work together ↗
      </Link>

      

    </nav>
  );
}
