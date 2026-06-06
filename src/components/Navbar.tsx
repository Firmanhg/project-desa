import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-white text-2xl font-bold">
            Karang Jaya
          </h1>

          <p className="text-yellow-400 text-xs tracking-[4px] uppercase">
            Village Catalog
          </p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-white items-center">

          <Link
            to="/"
            className="hover:text-yellow-400 transition"
          >
            Beranda
          </Link>

          <Link
            to="/profil"
            className="hover:text-yellow-400 transition"
          >
            Profil
          </Link>

          <Link
            to="/wisata"
            className="hover:text-yellow-400 transition"
          >
            Wisata
          </Link>

          <Link
            to="/umkm"
            className="hover:text-yellow-400 transition"
          >
            Komoditas
          </Link>

          <Link
            to="/galeri"
            className="hover:text-yellow-400 transition"
          >
            Galeri
          </Link>

          <Link
            to="/kontak"
            className="hover:text-yellow-400 transition"
          >
            Kontak
          </Link>

          <button className="bg-yellow-500 hover:bg-yellow-400 px-5 py-2 rounded-full font-semibold text-black">
            Explore
          </button>

        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 text-white">

          <nav className="flex flex-col px-6 py-6 space-y-4">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400"
            >
              Beranda
            </Link>

            <Link
              to="/profil"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400"
            >
              Profil
            </Link>

            <Link
              to="/wisata"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400"
            >
              Wisata
            </Link>

            <Link
              to="/umkm"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400"
            >
              Komoditas
            </Link>

            <Link
              to="/galeri"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400"
            >
              Galeri
            </Link>

            <Link
              to="/kontak"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400"
            >
              Kontak
            </Link>

            <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-3 rounded-full font-semibold">
              Explore
            </button>

          </nav>

        </div>
      )}
    </header>
  );
}

export default Navbar;