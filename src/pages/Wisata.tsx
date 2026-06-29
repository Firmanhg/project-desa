import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllWisata } from "../services/wisataService";
import type { Wisata as WisataType } from "../types/wisata";

function Wisata() {
  const [wisata, setWisata] = useState<WisataType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWisata = async () => {
      try {
        const data = await getAllWisata();
        setWisata(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadWisata();
  }, []);

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
            Jelajahi seluruh destinasi wisata yang ada di
            Desa Karang Jaya dan nikmati keindahan alam
            serta pengalaman terbaik bersama keluarga.
          </p>

        </div>

      </section>

      {/* DESTINASI */}
      <section className="py-24 bg-[#f8f6f1]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[6px] text-yellow-600">
              Destinasi Wisata
            </p>

            <h2 className="text-5xl font-bold mt-4 text-slate-800">
              Jelajahi Semua Wisata
            </h2>

          </div>

          {loading ? (

            <div className="text-center py-20 text-gray-500">
              Memuat data wisata...
            </div>

          ) : (             wisata.length === 0 ? (

            <div className="text-center py-20 text-gray-500">
              Belum ada data wisata.
            </div>

          ) : (

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {wisata.map((item) => (

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

                    <div className="flex items-center justify-between mb-4">

                      <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {item.category}
                      </span>

                      <span className="text-sm text-gray-500">
                        📍 {item.location}
                      </span>

                    </div>

                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-gray-600 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>

                    <Link
                      to={`/wisata/${item.id}`}
                      className="inline-block mt-6 bg-green-800 hover:bg-green-900 text-white px-5 py-3 rounded-full font-medium transition"
                    >
                      Lihat Detail
                    </Link>

                  </div>

                </div>

              ))}

            </div>

          )

        )}

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
              Nikmati keindahan alam, udara yang sejuk,
              dan berbagai destinasi wisata terbaik
              yang dimiliki Desa Karang Jaya.
            </p>
  
            <Link
              to="/kontak"
              className="inline-block mt-10 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full transition"
            >
              Hubungi Kami
            </Link>
  
          </div>
  
        </section>
  
      </>
    );
  }
  
  export default Wisata;