import { useEffect, useState } from "react";

import { getKontak } from "../services/kontakService";
import type { Kontak as KontakType } from "../types/kontak";

function Kontak() {
  const [kontak, setKontak] = useState<KontakType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadKontak = async () => {
      try {
        const data = await getKontak();
        setKontak(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadKontak();
  }, []);

  if (loading) {
    return (
      <div className="pt-40 text-center text-xl">
        Memuat kontak...
      </div>
    );
  }

  if (!kontak) {
    return (
      <div className="pt-40 text-center">
        <h2 className="text-3xl font-bold">
          Data kontak belum tersedia.
        </h2>
      </div>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-24 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-yellow-400">
            Hubungi Kami
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            Kontak {kontak.namaDesa}
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
            Informasi lokasi, kontak, dan akses menuju
            {` ${kontak.namaDesa}.`}
          </p>

        </div>
      </section>

      {/* INFORMASI */}
      <section className="bg-[#f8f6f1] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* KIRI */}
            <div>

              <p className="uppercase tracking-[6px] text-yellow-600">
                Informasi Desa
              </p>

              <h2 className="text-5xl font-bold mt-4 text-slate-800">
                Mari Terhubung
              </h2>

              <div className="mt-10 space-y-8">
              <div className="bg-white p-6 rounded-3xl shadow">

<h3 className="font-bold text-xl">
  📍 Alamat
</h3>

<p className="mt-3 text-gray-600 whitespace-pre-line">
  {kontak.alamat}
</p>

</div>

<div className="bg-white p-6 rounded-3xl shadow">

<h3 className="font-bold text-xl">
  📞 Telepon
</h3>

<p className="mt-3 text-gray-600">
  {kontak.telepon}
</p>

</div>

<div className="bg-white p-6 rounded-3xl shadow">

<h3 className="font-bold text-xl">
  ✉️ Email
</h3>

<p className="mt-3 text-gray-600">
  {kontak.email}
</p>

</div>

<div className="bg-white p-6 rounded-3xl shadow">

<h3 className="font-bold text-xl">
  🕒 Jam Operasional
</h3>

<p className="mt-3 text-gray-600">
  {kontak.jamOperasional}
</p>

</div>

</div>

</div>

{/* KANAN */}
<div>

<div className="overflow-hidden rounded-[40px] shadow-xl h-full min-h-[500px]">

<iframe
title="Google Maps"
src={kontak.maps}
className="w-full h-full border-0"
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
allowFullScreen
/>

</div>

</div>

</div>

</div>

</section>
      {/* CTA */}
      <section className="bg-green-900 py-24 text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Kunjungi {kontak.namaDesa}
          </h2>

          <p className="mt-6 text-lg text-gray-200">
            Temukan wisata alam, komoditas unggulan,
            dan keramahan masyarakat {kontak.namaDesa}.
          </p>

          <a
            href={kontak.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition"
          >
            Dapatkan Petunjuk Arah
          </a>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            {kontak.instagram && (
              <a
                href={kontak.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-900 px-5 py-2 rounded-full hover:bg-gray-100 transition"
              >
                Instagram
              </a>
            )}

            {kontak.facebook && (
              <a
                href={kontak.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-900 px-5 py-2 rounded-full hover:bg-gray-100 transition"
              >
                Facebook
              </a>
            )}

            {kontak.youtube && (
              <a
                href={kontak.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-900 px-5 py-2 rounded-full hover:bg-gray-100 transition"
              >
                YouTube
              </a>
            )}

          </div>

        </div>

      </section>

    </>
  );
}

export default Kontak;