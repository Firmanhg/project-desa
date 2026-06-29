import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import {
  getWisataById,
  updateWisata,
} from "../../services/wisataService";

export default function EditWisata() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [imageName, setImageName] = useState("");

  const image = imageName
    ? `/wisata/${imageName}`
    : "";

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    if (!id) return;

    try {
      const data = await getWisataById(id);

      if (!data) {
        Swal.fire({
          icon: "error",
          title: "Data tidak ditemukan",
        });

        navigate("/admin/wisata");

        return;
      }

      setTitle(data.title);
      setCategory(data.category);
      setLocation(data.location);
      setDescription(data.description);

      setImageName(
        data.image.replace("/wisata/", "")
      );

    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!id) return;

    try {
      setLoading(true);

      await updateWisata(id, {
        title,
        category,
        location,
        description,
        image,
      });

      await Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Data berhasil diperbarui.",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/admin/wisata");

    } catch (err) {

      console.error(err);

      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Tidak dapat memperbarui data.",
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-8">
          Edit Wisata
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>

            <label className="block mb-2 font-medium">
              Nama Wisata
            </label>

            <input
              className="w-full border rounded-lg p-3"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Kategori
            </label>

            <input
              className="w-full border rounded-lg p-3"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Lokasi
            </label>

            <input
              className="w-full border rounded-lg p-3"
              value={location}
              onChange={(e)=>setLocation(e.target.value)}
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Deskripsi
            </label>

            <textarea
              rows={5}
              className="w-full border rounded-lg p-3"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Nama File Gambar
            </label>

            <input
              className="w-full border rounded-lg p-3"
              value={imageName}
              onChange={(e)=>setImageName(e.target.value)}
            />

          </div>

          {
            image && (

              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 object-cover border"
              />

            )
          }

          <div className="flex gap-3">

            <button
              type="button"
              onClick={()=>navigate("/admin/wisata")}
              className="border px-6 py-3 rounded-lg"
            >
              Batal
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
            >
              {
                loading
                  ? "Menyimpan..."
                  : "Update"
              }
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}
