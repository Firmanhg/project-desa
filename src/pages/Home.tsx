import heroImage from "../assets/hero.jpg";

import wisata1 from "../assets/wisata/kebun-duren.jpg";
import wisata2 from "../assets/wisata/air-terjun.jpg";
import wisata3 from "../assets/wisata/bukit.jpg";

import duren from "../assets/komoditas/duren.jpg";
import madu from "../assets/komoditas/madu.jpg";
import duku from "../assets/komoditas/duku.jpg";
import cokelat from "../assets/komoditas/cokelat.jpg";

import FAQ from "../components/FAQ";

function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center text-white max-w-5xl">
            <p className="uppercase tracking-[8px] text-yellow-400 mb-6">
              Lampung Selatan
            </p>

            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              Katalog
              <span className="block text-yellow-400">
                Karang Jaya
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Menjelajahi keindahan wisata alam dan
              komoditas unggulan Desa Karang Jaya.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full">
                Jelajahi Wisata
              </button>

              <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
                Lihat Komoditas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TENTANG */}
      <section className="bg-[#f8f6f1] py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">
            <p className="uppercase tracking-[6px] text-yellow-600">
              Tentang Desa
            </p>

            <h2 className="text-5xl font-bold mt-4 text-slate-800">
              Mengenal Karang Jaya
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mt-10 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Desa Karang Jaya merupakan desa yang memiliki
              potensi wisata serta komoditas unggulan yang
              menjadi kebanggaan masyarakat Lampung Selatan.

              Dengan wisata kebun durian serta hasil bumi
              berupa durian, madu, duku, dan cokelat,
              Karang Jaya menjadi salah satu desa dengan
              potensi ekonomi dan pariwisata yang terus berkembang.
            </p>
          </div>

        </div>
      </section>

      {/* STATISTIK */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-[#f8f6f1] rounded-3xl p-10 text-center">
              <h3 className="text-5xl font-bold text-green-800">
                1+
              </h3>

              <p className="mt-4 text-gray-600">
                Wisata Utama
              </p>
            </div>

            <div className="bg-[#f8f6f1] rounded-3xl p-10 text-center">
              <h3 className="text-5xl font-bold text-green-800">
                4
              </h3>

              <p className="mt-4 text-gray-600">
                Komoditas Unggulan
              </p>
            </div>

            <div className="bg-[#f8f6f1] rounded-3xl p-10 text-center">
              <h3 className="text-5xl font-bold text-green-800">
                100%
              </h3>

              <p className="mt-4 text-gray-600">
                Potensi Lokal
              </p>
            </div>

            <div className="bg-[#f8f6f1] rounded-3xl p-10 text-center">
              <h3 className="text-5xl font-bold text-green-800">
                ∞
              </h3>

              <p className="mt-4 text-gray-600">
                Peluang Wisata
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WISATA */}
      <section className="bg-[#f8f6f1] py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[6px] text-yellow-600">
              Wisata Unggulan
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Kebun Duren Karang Jaya
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <img
                src={wisata1}
                alt="Kebun Duren"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Kebun Duren
                </h3>

                <p className="mt-3 text-gray-600">
                  Menikmati pengalaman wisata kebun durian
                  langsung dari perkebunan masyarakat.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <img
                src={wisata2}
                alt="Air Terjun"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Air Terjun
                </h3>

                <p className="mt-3 text-gray-600">
                  Keindahan alam yang masih asri dan
                  menjadi daya tarik wisatawan.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <img
                src={wisata3}
                alt="Bukit"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Bukit Karang Jaya
                </h3>

                <p className="mt-3 text-gray-600">
                  Panorama perbukitan hijau dengan
                  pemandangan alam yang memukau.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* KOMODITAS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[6px] text-yellow-600">
              Komoditas Unggulan
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Hasil Bumi Karang Jaya
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div>
              <img
                src={duren}
                alt=""
                className="h-80 w-full object-cover rounded-3xl"
              />

              <h3 className="mt-5 text-2xl font-bold">
                Durian
              </h3>
            </div>

            <div>
              <img
                src={madu}
                alt=""
                className="h-80 w-full object-cover rounded-3xl"
              />

              <h3 className="mt-5 text-2xl font-bold">
                Madu
              </h3>
            </div>

            <div>
              <img
                src={duku}
                alt=""
                className="h-80 w-full object-cover rounded-3xl"
              />

              <h3 className="mt-5 text-2xl font-bold">
                Duku
              </h3>
            </div>

            <div>
              <img
                src={cokelat}
                alt=""
                className="h-80 w-full object-cover rounded-3xl"
              />

              <h3 className="mt-5 text-2xl font-bold">
                Cokelat
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-5xl font-bold">
            Jelajahi Karang Jaya
          </h2>

          <p className="mt-6 text-lg text-gray-200">
            Temukan wisata, komoditas, dan potensi terbaik
            Desa Karang Jaya.
          </p>

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold">
            Kunjungi Sekarang
          </button>

        </div>
      </section>
      <FAQ />
    </>
  );
}

export default Home;
