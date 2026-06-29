import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import {
  getKontak,
  createKontak,
  updateKontak,
} from "../../services/kontakService";

export default function EditKontak() {
  const [loading, setLoading] = useState(true);
  const [exists, setExists] = useState(false);

  const [namaDesa, setNamaDesa] = useState("");
  const [alamat, setAlamat] = useState("");
  const [telepon, setTelepon] = useState("");
  const [email, setEmail] = useState("");
  const [maps, setMaps] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [youtube, setYoutube] = useState("");
  const [jamOperasional, setJamOperasional] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getKontak();

        if (data) {
          setExists(true);

          setNamaDesa(data.namaDesa);
          setAlamat(data.alamat);
          setTelepon(data.telepon);
          setEmail(data.email);
          setMaps(data.maps);
          setInstagram(data.instagram);
          setFacebook(data.facebook);
          setYoutube(data.youtube);
          setJamOperasional(data.jamOperasional);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const payload = {
      namaDesa,
      alamat,
      telepon,
      email,
      maps,
      instagram,
      facebook,
      youtube,
      jamOperasional,
    };

    try {
      if (exists) {
        await updateKontak(payload);
      } else {
        await createKontak(payload);
        setExists(true);
      }

      await Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Kontak desa berhasil disimpan.",
      });

    } catch (error) {
      console.error(error);

      await Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Kontak desa gagal disimpan.",
      });
    }
  };

  if (loading) {
    return (
      <div className="p-10 text-center">
        Memuat data...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">

      <div className="bg-white rounded-2xl shadow p-8">

        <h1 className="text-3xl font-bold mb-8">
          Kontak Desa
        </h1>

        <form
  onSubmit={handleSubmit}
  className="space-y-6"
>
                  <div>

<label className="font-medium">
  Nama Desa
</label>

<input
  className="w-full border rounded-lg p-3 mt-2"
  value={namaDesa}
  onChange={(e) => setNamaDesa(e.target.value)}
  required
/>

</div>

<div>

<label className="font-medium">
  Alamat
</label>

<textarea
  rows={3}
  className="w-full border rounded-lg p-3 mt-2"
  value={alamat}
  onChange={(e) => setAlamat(e.target.value)}
  required
/>

</div>

<div className="grid md:grid-cols-2 gap-6">

<div>

  <label className="font-medium">
    Nomor Telepon
  </label>

  <input
    className="w-full border rounded-lg p-3 mt-2"
    value={telepon}
    onChange={(e) => setTelepon(e.target.value)}
    required
  />

</div>

<div>

  <label className="font-medium">
    Email
  </label>

  <input
    type="email"
    className="w-full border rounded-lg p-3 mt-2"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />

</div>

</div>

<div>

<label className="font-medium">
  Link Google Maps
</label>

<input
  className="w-full border rounded-lg p-3 mt-2"
  value={maps}
  onChange={(e) => setMaps(e.target.value)}
  placeholder="https://maps.google.com/..."
/>

</div>

<div className="grid md:grid-cols-3 gap-6">

<div>

  <label className="font-medium">
    Instagram
  </label>

  <input
    className="w-full border rounded-lg p-3 mt-2"
    value={instagram}
    onChange={(e) => setInstagram(e.target.value)}
  />

</div>

<div>

  <label className="font-medium">
    Facebook
  </label>

  <input
    className="w-full border rounded-lg p-3 mt-2"
    value={facebook}
    onChange={(e) => setFacebook(e.target.value)}
  />

</div>

<div>

  <label className="font-medium">
    YouTube
  </label>

  <input
    className="w-full border rounded-lg p-3 mt-2"
    value={youtube}
    onChange={(e) => setYoutube(e.target.value)}
  />

</div>

</div>

<div>

<label className="font-medium">
  Jam Operasional
</label>

<input
  className="w-full border rounded-lg p-3 mt-2"
  value={jamOperasional}
  onChange={(e) => setJamOperasional(e.target.value)}
  placeholder="Senin - Jumat, 08.00 - 16.00"
/>

</div>

<button
type="submit"
className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg transition"
>
Simpan Kontak
</button>

</form>

</div>

</div>
);
}