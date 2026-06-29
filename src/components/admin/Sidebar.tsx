import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-green-900 text-white min-h-screen">

      <div className="p-8 border-b border-green-800">

        <h1 className="text-2xl font-bold">
          Karang Jaya
        </h1>

        <p className="text-yellow-400 text-sm tracking-[4px] uppercase">
          Admin Panel
        </p>

      </div>

      <nav className="mt-8">

        <Link
          to="/admin/dashboard"
          className="block px-8 py-4 hover:bg-green-800"
        >
          📊 Dashboard
        </Link>

        <Link
          to="/admin/wisata"
          className="block px-8 py-4 hover:bg-green-800"
        >
          🏞 Wisata
        </Link>

        <Link
          to="/admin/komoditas"
          className="block px-8 py-4 hover:bg-green-800"
        >
          🌾 Komoditas
        </Link>

        <Link
          to="/admin/galeri"
          className="block px-8 py-4 hover:bg-green-800"
        >
          🖼 Galeri
        </Link>

        <Link
          to="/admin/profil"
          className="block px-8 py-4 hover:bg-green-800"
        >
          🏡 Profil Desa
        </Link>

      </nav>
    </aside>
  );
}

export default Sidebar;