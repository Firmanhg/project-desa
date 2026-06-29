import { useEffect, useState } from "react";

import { getProfil } from "../services/profilService";
import type { Profil as ProfilType } from "../types/profil";

function Profil() {
  const [profil, setProfil] = useState<ProfilType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfil = async () => {
      try {
        const data = await getProfil();

        setProfil(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadProfil();
  }, []);

  if (loading) {
    return (
      <div className="pt-40 text-center text-xl">
        Memuat profil desa...
      </div>
    );
  }

  if (!profil) {
    return (
      <div className="pt-40 text-center">

        <h2 className="text-3xl font-bold">
          Profil desa belum tersedia
        </h2>

      </div>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-green-900 text-white">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-yellow-400">
            Profil Desa
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            {profil.title}
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
            {profil.description}
          </p>

        </div>

      </section>

      {/* TENTANG DESA */}
      <section className="py-24 bg-[#f8f6f1]">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-10">
            Tentang Desa
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            {profil.description}
          </p>

        </div>

      </section>

      {/* VISI MISI */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12">

            {/* VISI */}
            <div className="bg-[#f8f6f1] p-10 rounded-3xl">

              <h2 className="text-3xl font-bold text-green-800 mb-6">
                Visi
              </h2>

              <p className="text-gray-700 leading-relaxed">
                {profil.vision}
              </p>

            </div>

            {/* MISI */}
            <div className="bg-[#f8f6f1] p-10 rounded-3xl">

              <h2 className="text-3xl font-bold text-green-800 mb-6">
                Misi
              </h2>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {profil.mission}
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* DATA DESA */}
            <section className="py-24 bg-[#f8f6f1]">

<div className="max-w-7xl mx-auto px-6">

  <h2 className="text-4xl font-bold text-center mb-16">
    Data Singkat Desa
  </h2>

  <div className="grid md:grid-cols-4 gap-8">

    <div className="bg-white p-8 rounded-3xl text-center shadow">

      <h3 className="text-4xl font-bold text-green-800">
        {profil.jumlahKK}
      </h3>

      <p className="mt-3 text-gray-600">
        Kepala Keluarga
      </p>

    </div>

    <div className="bg-white p-8 rounded-3xl text-center shadow">

      <h3 className="text-4xl font-bold text-green-800">
        {profil.jumlahPenduduk}
      </h3>

      <p className="mt-3 text-gray-600">
        Penduduk
      </p>

    </div>

    <div className="bg-white p-8 rounded-3xl text-center shadow">

      <h3 className="text-4xl font-bold text-green-800">
        {profil.jumlahKomoditas}
      </h3>

      <p className="mt-3 text-gray-600">
        Komoditas Unggulan
      </p>

    </div>

    <div className="bg-white p-8 rounded-3xl text-center shadow">

      <h3 className="text-4xl font-bold text-green-800">
        {profil.jumlahWisata}
      </h3>

      <p className="mt-3 text-gray-600">
        Destinasi Wisata
      </p>

    </div>

  </div>

</div>

</section>
      {/* STRUKTUR PEMERINTAHAN */}
      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Struktur Pemerintahan Desa
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#f8f6f1] p-8 rounded-3xl text-center">

              <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>

              <h3 className="font-bold text-xl">
                Kepala Desa
              </h3>

              <p className="text-gray-600">
                Desa {profil.title}
              </p>

            </div>

            <div className="bg-[#f8f6f1] p-8 rounded-3xl text-center">

              <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>

              <h3 className="font-bold text-xl">
                Sekretaris Desa
              </h3>

              <p className="text-gray-600">
                Pemerintah Desa
              </p>

            </div>

            <div className="bg-[#f8f6f1] p-8 rounded-3xl text-center">

              <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>

              <h3 className="font-bold text-xl">
                Ketua BPD
              </h3>

              <p className="text-gray-600">
                Badan Permusyawaratan Desa
              </p>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default Profil;