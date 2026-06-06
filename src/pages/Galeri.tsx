import heroImage from "../assets/hero.jpg";

import wisata1 from "../assets/wisata/kebun-duren.jpg";
import wisata2 from "../assets/wisata/air-terjun.jpg";
import wisata3 from "../assets/wisata/bukit.jpg";

import duren from "../assets/komoditas/duren.jpg";
import madu from "../assets/komoditas/madu.jpg";
import duku from "../assets/komoditas/duku.jpg";
import cokelat from "../assets/komoditas/cokelat.jpg";

function Galeri() {
  const images = [
    heroImage,
    wisata1,
    wisata2,
    wisata3,
    duren,
    madu,
    duku,
    cokelat,
  ];

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-24 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-yellow-400">
            Galeri Desa
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            Galeri Karang Jaya
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
            Kumpulan foto wisata, komoditas unggulan,
            dan keindahan alam Desa Karang Jaya.
          </p>

        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[#f8f6f1] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-yellow-600">
              Dokumentasi Desa
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Momen Terbaik Karang Jaya
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {images.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl shadow-lg bg-white"
              >
                <img
                  src={image}
                  alt={`Galeri ${index + 1}`}
                  className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* HIGHLIGHT */}
      <section className="bg-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-green-900 rounded-[40px] overflow-hidden">

            <div className="grid md:grid-cols-2">

              <img
                src={heroImage}
                alt="Karang Jaya"
                className="h-full w-full object-cover"
              />

              <div className="p-12 text-white flex flex-col justify-center">

                <p className="uppercase tracking-[6px] text-yellow-400">
                  Highlight
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mt-4">
                  Karang Jaya Dalam Satu Bingkai
                </h2>

                <p className="mt-6 text-gray-300 leading-relaxed">
                  Setiap sudut Desa Karang Jaya menyimpan
                  keindahan alam, hasil bumi yang melimpah,
                  dan keramahan masyarakat yang menjadi daya
                  tarik tersendiri bagi setiap pengunjung.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#f8f6f1] py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Abadikan Momen di Karang Jaya
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Nikmati keindahan wisata dan potensi desa
            yang siap menyambut setiap pengunjung.
          </p>

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full">
            Kunjungi Sekarang
          </button>

        </div>

      </section>
    </>
  );
}

export default Galeri;