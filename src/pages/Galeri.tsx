import { useEffect, useState } from "react";

import { getAllGaleri } from "../services/galeriService";
import type { Galeri as GaleriType } from "../types/galeri";

function Galeri() {
  const [galeri, setGaleri] = useState<GaleriType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGaleri = async () => {
      try {
        const data = await getAllGaleri();

        setGaleri(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadGaleri();
  }, []);

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

          {loading ? (

            <div className="text-center py-20 text-gray-500">
              Memuat galeri...
            </div>

          ) : (             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {galeri.length === 0 ? (

              <div className="col-span-full text-center py-20 text-gray-500">
                Belum ada foto galeri.
              </div>

            ) : (

              galeri.map((item) => (

                <div
                  key={item.id}
                  className="group overflow-hidden rounded-3xl shadow-lg bg-white"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="p-5">

                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                  </div>

                </div>

              ))

            )}

          </div>

        )}

      </div>

    </section>

          {/* HIGHLIGHT */}
          <section className="bg-white py-24">

<div className="max-w-6xl mx-auto px-6">

  <div className="bg-green-900 rounded-[40px] overflow-hidden">

    <div className="grid md:grid-cols-2">

      {galeri.length > 0 ? (

        <img
          src={galeri[0].image}
          alt={galeri[0].title}
          className="h-full w-full object-cover"
        />

      ) : (

        <div className="h-[400px] bg-gray-300"></div>

      )}

      <div className="p-12 text-white flex flex-col justify-center">

        <p className="uppercase tracking-[6px] text-yellow-400">
          Highlight
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Karang Jaya Dalam Satu Bingkai
        </h2>

        <p className="mt-6 text-gray-300 leading-relaxed">
          Dokumentasi berbagai sudut keindahan Desa
          Karang Jaya mulai dari wisata alam,
          komoditas unggulan, hingga aktivitas
          masyarakat yang menjadi daya tarik desa.
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