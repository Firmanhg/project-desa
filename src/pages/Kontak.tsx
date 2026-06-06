function Kontak() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-24 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[6px] text-yellow-400">
            Hubungi Kami
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            Kontak Desa Karang Jaya
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
            Informasi lokasi, kontak, dan akses menuju
            Desa Karang Jaya, Lampung Selatan.
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

                  <p className="mt-3 text-gray-600">
                    Desa Karang Jaya,
                    Kabupaten Lampung Selatan,
                    Provinsi Lampung.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow">
                  <h3 className="font-bold text-xl">
                    📞 Telepon
                  </h3>

                  <p className="mt-3 text-gray-600">
                    +62 812 3456 7890
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow">
                  <h3 className="font-bold text-xl">
                    ✉️ Email
                  </h3>

                  <p className="mt-3 text-gray-600">
                    karangjaya@desa.id
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow">
                  <h3 className="font-bold text-xl">
                    🕒 Jam Operasional
                  </h3>

                  <p className="mt-3 text-gray-600">
                    Senin - Jumat
                    <br />
                    08.00 - 16.00 WIB
                  </p>
                </div>

              </div>

            </div>

            {/* KANAN */}
            <div>

              <div className="overflow-hidden rounded-[40px] shadow-xl h-full min-h-[500px]">

                <iframe
                  title="Google Maps"
                  src="https://maps.app.goo.gl/VBpMAbLSWYSwxu926"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-green-900 py-24 text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Kunjungi Desa Karang Jaya
          </h2>

          <p className="mt-6 text-lg text-gray-200">
            Temukan wisata alam, komoditas unggulan,
            dan keramahan masyarakat Karang Jaya.
          </p>

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold">
            Dapatkan Petunjuk Arah
          </button>

        </div>

      </section>
    </>
  );
}

export default Kontak;