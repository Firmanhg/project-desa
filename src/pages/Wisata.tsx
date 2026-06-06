import wisata1 from "../assets/wisata/kebun-duren.jpg";
import wisata2 from "../assets/wisata/air-terjun.jpg";
import wisata3 from "../assets/wisata/bukit.jpg";

function Wisata() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-24 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-yellow-400">
            Destinasi Wisata
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            Wisata Karang Jaya
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
            Jelajahi pesona alam Desa Karang Jaya melalui
            wisata kebun durian, air terjun, dan panorama
            perbukitan yang memanjakan mata.
          </p>

        </div>
      </section>

      {/* DESTINASI UNGGULAN */}
      <section className="py-24 bg-[#f8f6f1]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[6px] text-yellow-600">
              Wisata Unggulan
            </p>

            <h2 className="text-5xl font-bold mt-4 text-slate-800">
              Destinasi Terbaik Karang Jaya
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* KEBUN DUREN */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">

              <img
                src={wisata1}
                alt="Kebun Duren"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  Kebun Duren
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Wisata favorit yang menawarkan pengalaman
                  menikmati durian langsung dari kebun serta
                  suasana alam yang sejuk dan asri.
                </p>

              </div>
            </div>

            {/* AIR TERJUN */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">

              <img
                src={wisata2}
                alt="Air Terjun"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  Air Terjun
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Air terjun alami dengan panorama hijau
                  yang cocok untuk rekreasi keluarga
                  dan fotografi alam.
                </p>

              </div>
            </div>

            {/* BUKIT */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">

              <img
                src={wisata3}
                alt="Bukit"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  Bukit Karang Jaya
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Spot terbaik untuk menikmati pemandangan
                  alam, matahari terbit, dan hamparan
                  perkebunan dari ketinggian.
                </p>

              </div>
            </div>

          </div>

        </div>

      </section>

      {/* AKTIVITAS */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-yellow-600">
              Aktivitas Wisata
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Pengalaman yang Bisa Dinikmati
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-[#f8f6f1] p-8 rounded-3xl text-center">
              <div className="text-5xl mb-4">🌳</div>

              <h3 className="font-bold text-xl">
                Jelajah Alam
              </h3>
            </div>

            <div className="bg-[#f8f6f1] p-8 rounded-3xl text-center">
              <div className="text-5xl mb-4">📸</div>

              <h3 className="font-bold text-xl">
                Spot Foto
              </h3>
            </div>

            <div className="bg-[#f8f6f1] p-8 rounded-3xl text-center">
              <div className="text-5xl mb-4">🥭</div>

              <h3 className="font-bold text-xl">
                Wisata Kebun
              </h3>
            </div>

            <div className="bg-[#f8f6f1] p-8 rounded-3xl text-center">
              <div className="text-5xl mb-4">🏕️</div>

              <h3 className="font-bold text-xl">
                Rekreasi Keluarga
              </h3>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-green-900 text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Ayo Kunjungi Karang Jaya
          </h2>

          <p className="mt-6 text-lg text-gray-200">
            Nikmati keindahan alam dan keramahan masyarakat
            Desa Karang Jaya dalam satu pengalaman wisata
            yang tak terlupakan.
          </p>

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full">
            Rencanakan Kunjungan
          </button>

        </div>

      </section>
    </>
  );
}

export default Wisata;