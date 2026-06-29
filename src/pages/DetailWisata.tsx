import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getWisataById } from "../services/wisataService";
import type { Wisata } from "../types/wisata";

export default function DetailWisata() {
  const { id } = useParams();

  const [wisata, setWisata] = useState<Wisata | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWisata = async () => {
      if (!id) return;

      try {
        const data = await getWisataById(id);
        setWisata(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadWisata();
  }, [id]);

  if (loading) {
    return (
      <div className="pt-40 text-center text-xl">
        Memuat data...
      </div>
    );
  }

  if (!wisata) {
    return (
      <div className="pt-40 text-center">

        <h2 className="text-3xl font-bold">
          Wisata tidak ditemukan
        </h2>

        <Link
          to="/wisata"
          className="inline-block mt-8 bg-green-800 text-white px-6 py-3 rounded-lg"
        >
          Kembali
        </Link>

      </div>
    );
  }

  return (
    <>
    {/* HERO */}
    <section className="pt-32 pb-20 bg-green-900 text-white">

      <div className="max-w-6xl mx-auto px-6">

        <Link
          to="/wisata"
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8"
        >
          ← Kembali ke Daftar Wisata
        </Link>

        <h1 className="text-5xl md:text-6xl font-bold">
          {wisata.title}
        </h1>

        <div className="flex flex-wrap gap-4 mt-6">

          <span className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full">
            {wisata.category}
          </span>

          <span className="border border-white px-4 py-2 rounded-full">
            📍 {wisata.location}
          </span>

        </div>

      </div>

    </section>

    {/* CONTENT */}
    <section className="py-20 bg-[#f8f6f1]">

      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-3xl overflow-hidden shadow-xl">

          <img
            src={wisata.image}
            alt={wisata.title}
            className="w-full h-[500px] object-cover"
          />

          <div className="p-10">

            <h2 className="text-4xl font-bold">
              {wisata.title}
            </h2>

            <p className="mt-3 text-lg text-gray-500">
              📍 {wisata.location}
            </p>

            <div className="mt-8">

              <h3 className="text-2xl font-semibold mb-4">
                Deskripsi
              </h3>

              <p className="text-gray-700 leading-8 whitespace-pre-line">
                {wisata.description}
              </p>

            </div>

            <div className="mt-12">

              <Link
                to="/wisata"
                className="inline-block bg-green-800 hover:bg-green-900 text-white px-8 py-4 rounded-full transition"
              >
                ← Kembali ke Semua Wisata
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>

    </>
  );
}