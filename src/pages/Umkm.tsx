import { useEffect, useState } from "react";

import { getAllKomoditas } from "../services/komoditasService";
import type { Komoditas } from "../types/komoditas";

function Umkm() {
  const [komoditas, setKomoditas] = useState<Komoditas[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadKomoditas = async () => {
      try {
        const data = await getAllKomoditas();

        setKomoditas(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadKomoditas();
  }, []);

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

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-yellow-600">
              Komoditas Desa
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Produk Unggulan
            </h2>

          </div>

          {loading ? (

            <div className="text-center py-20 text-gray-500">
              Memuat data komoditas...
            </div>

          ) : (             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {komoditas.length === 0 ? (

              <div className="col-span-full text-center py-20 text-gray-500">
                Belum ada data komoditas.
              </div>

            ) : (

              komoditas.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-72 w-full object-cover"
                  />

                  <div className="p-6">

                    <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>

                    <h2 className="text-2xl font-bold mt-4">
                      {item.title}
                    </h2>

                    <p className="mt-4 text-gray-600 leading-relaxed line-clamp-4">
                      {item.description}
                    </p>

                  </div>

                </div>

              ))

            )}

          </div>

        )}

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