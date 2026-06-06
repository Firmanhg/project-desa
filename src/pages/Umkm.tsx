import duren from "../assets/komoditas/duren.jpg";
import madu from "../assets/komoditas/madu.jpg";
import duku from "../assets/komoditas/duku.jpg";
import cokelat from "../assets/komoditas/cokelat.jpg";

function Umkm() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-24 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-yellow-400">
            Komoditas Unggulan
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            Hasil Bumi Karang Jaya
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
            Beragam hasil perkebunan dan produk unggulan
            yang menjadi sumber ekonomi masyarakat
            Desa Karang Jaya.
          </p>

        </div>
      </section>

      {/* KOMODITAS */}
      <section className="py-24 bg-[#f8f6f1]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* DURIAN */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">

              <img
                src={duren}
                alt="Durian"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold">
                  Durian
                </h2>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Komoditas utama Desa Karang Jaya yang terkenal
                  dengan rasa khas, daging buah tebal,
                  dan kualitas unggulan.
                </p>

              </div>

            </div>

            {/* MADU */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">

              <img
                src={madu}
                alt="Madu"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold">
                  Madu
                </h2>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Madu alami yang dihasilkan dari lingkungan
                  perkebunan dan hutan yang masih terjaga.
                </p>

              </div>

            </div>

            {/* DUKU */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">

              <img
                src={duku}
                alt="Duku"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold">
                  Duku
                </h2>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Buah segar dengan cita rasa manis yang menjadi
                  salah satu komoditas andalan masyarakat desa.
                </p>

              </div>

            </div>

            {/* COKELAT */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">

              <img
                src={cokelat}
                alt="Cokelat"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h2 className="text-2xl font-bold">
                  Cokelat
                </h2>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Hasil perkebunan kakao yang memiliki potensi
                  besar untuk dikembangkan menjadi produk olahan.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* POTENSI EKONOMI */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-yellow-600">
              Potensi Desa
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Penggerak Ekonomi Masyarakat
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-[#f8f6f1] p-8 rounded-3xl text-center">
              <div className="text-5xl mb-4">🌳</div>

              <h3 className="font-bold text-xl">
                Perkebunan
              </h3>
            </div>

            <div className="bg-[#f8f6f1] p-8 rounded-3xl text-center">
              <div className="text-5xl mb-4">🍯</div>

              <h3 className="font-bold text-xl">
                Peternakan Lebah
              </h3>
            </div>

            <div className="bg-[#f8f6f1] p-8 rounded-3xl text-center">
              <div className="text-5xl mb-4">📈</div>

              <h3 className="font-bold text-xl">
                UMKM Lokal
              </h3>
            </div>

            <div className="bg-[#f8f6f1] p-8 rounded-3xl text-center">
              <div className="text-5xl mb-4">🤝</div>

              <h3 className="font-bold text-xl">
                Pemberdayaan Warga
              </h3>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-green-900 text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Komoditas Berkualitas dari Karang Jaya
          </h2>

          <p className="mt-6 text-lg text-gray-200">
            Mendukung perekonomian masyarakat melalui
            pengembangan komoditas unggulan yang berkelanjutan.
          </p>

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full">
            Pelajari Lebih Lanjut
          </button>

        </div>

      </section>
    </>
  );
}

export default Umkm;