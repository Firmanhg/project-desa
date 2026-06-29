import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import {
  getProfil,
  createProfil,
  updateProfil,
} from "../../services/profilService";

export default function EditProfil() {
  const [loading, setLoading] = useState(true);
  const [exists, setExists] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [vision, setVision] = useState("");
  const [mission, setMission] = useState("");

  const [jumlahPenduduk, setJumlahPenduduk] = useState(0);
  const [jumlahKK, setJumlahKK] = useState(0);
  const [jumlahWisata, setJumlahWisata] = useState(0);
  const [jumlahKomoditas, setJumlahKomoditas] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getProfil();

        if (data) {
          setExists(true);

          setTitle(data.title);
          setDescription(data.description);
          setVision(data.vision);
          setMission(data.mission);

          setJumlahPenduduk(data.jumlahPenduduk);
          setJumlahKK(data.jumlahKK);
          setJumlahWisata(data.jumlahWisata);
          setJumlahKomoditas(data.jumlahKomoditas);
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
      title,
      description,
      vision,
      mission,
      jumlahPenduduk,
      jumlahKK,
      jumlahWisata,
      jumlahKomoditas,
    };

    try {
      if (exists) {
        await updateProfil(payload);
      } else {
        await createProfil(payload);
        setExists(true);
      }

      await Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Profil desa berhasil disimpan.",
      });

    } catch (error) {
      console.error(error);

      await Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Profil desa gagal disimpan.",
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
          Profil Desa
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

          </div>

          <div>

            <label className="font-medium">
              Deskripsi
            </label>

            <textarea
              rows={5}
              className="w-full border rounded-lg p-3 mt-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

          </div>

          <div>

            <label className="font-medium">
              Visi
            </label>

            <textarea
              rows={4}
              className="w-full border rounded-lg p-3 mt-2"
              value={vision}
              onChange={(e) => setVision(e.target.value)}
              required
            />

          </div>

          <div>

            <label className="font-medium">
              Misi
            </label>

            <textarea
              rows={6}
              className="w-full border rounded-lg p-3 mt-2"
              value={mission}
              onChange={(e) => setMission(e.target.value)}
              required
            />

          </div>
          <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label className="font-medium">
              Jumlah Penduduk
            </label>

            <input
              type="number"
              className="w-full border rounded-lg p-3 mt-2"
              value={jumlahPenduduk}
              onChange={(e) =>
                setJumlahPenduduk(Number(e.target.value))
              }
              required
            />

          </div>

          <div>

            <label className="font-medium">
              Jumlah KK
            </label>

            <input
              type="number"
              className="w-full border rounded-lg p-3 mt-2"
              value={jumlahKK}
              onChange={(e) =>
                setJumlahKK(Number(e.target.value))
              }
              required
            />

          </div>

          <div>

            <label className="font-medium">
              Jumlah Wisata
            </label>

            <input
              type="number"
              className="w-full border rounded-lg p-3 mt-2"
              value={jumlahWisata}
              onChange={(e) =>
                setJumlahWisata(Number(e.target.value))
              }
              required
            />

          </div>

          <div>

            <label className="font-medium">
              Jumlah Komoditas
            </label>

            <input
              type="number"
              className="w-full border rounded-lg p-3 mt-2"
              value={jumlahKomoditas}
              onChange={(e) =>
                setJumlahKomoditas(Number(e.target.value))
              }
              required
            />

          </div>

        </div>

        <div className="pt-4">

          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg transition"
          >
            Simpan Profil
          </button>

        </div>

      </form>

    </div>

  </div>
);
}