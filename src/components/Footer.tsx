function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-yellow-400">
              Karang Jaya
            </h2>

            <p className="mt-4 text-gray-300">
              Katalog wisata dan komoditas unggulan
              Desa Karang Jaya, Lampung Selatan.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Wisata
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>Kebun Duren</li>
              <li>Air Terjun</li>
              <li>Bukit Desa</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Komoditas
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>Durian</li>
              <li>Madu</li>
              <li>Duku</li>
              <li>Cokelat</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Lokasi
            </h3>

            <p className="text-gray-300">
              Lampung Selatan
            </p>

            <p className="text-gray-300">
              Provinsi Lampung
            </p>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-400">
          © 2026 Katalog Karang Jaya
        </div>

      </div>

    </footer>
  );
}

export default Footer;