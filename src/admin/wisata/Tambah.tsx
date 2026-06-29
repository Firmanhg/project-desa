import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { addWisata } from "../../services/wisataService";

export default function TambahWisata() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [imageName, setImageName] = useState("");

  const image = imageName ? `/wisata/${imageName}` : "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !title.trim() ||
      !category.trim() ||
      !location.trim() ||
      !description.trim() ||
      !imageName.trim()
    ) {
      Swal.fire({
        icon: "warning",
        title: "Form belum lengkap",
        text: "Silakan isi semua field terlebih dahulu.",
      });

      return;
    }

    try {
      setLoading(true);

      await addWisata({
        title,
        category,
        location,
        description,
        image,
      });

      await Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Data wisata berhasil ditambahkan.",
        timer: 1800,
        showConfirmButton: false,
      });

      navigate("/admin/wisata");
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Terjadi kesalahan saat menyimpan data.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8">
          Tambah Wisata
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Nama */}
          <div>
            <label className="block font-medium mb-2">
              Nama Wisata
            </label>

            <input
              type="text"
              className="w-full border rounded-lg p-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Contoh: Kebun Duren"
            />
          </div>

          {/* Kategori */}
          <div>
            <label className="block font-medium mb-2">
              Kategori
            </label>

            <input
              type="text"
              className="w-full border rounded-lg p-3"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Contoh: Wisata Alam"
            />
          </div>

          {/* Lokasi */}
          <div>
            <label className="block font-medium mb-2">
              Lokasi
            </label>

            <input
              type="text"
              className="w-full border rounded-lg p-3"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Contoh: Dusun III"
            />
          </div>

          {/* Deskripsi */}
          <div>
            <label className="block font-medium mb-2">
              Deskripsi
            </label>

            <textarea
              rows={5}
              className="w-full border rounded-lg p-3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Masukkan deskripsi wisata..."
            />
          </div>

          {/* Nama File */}
          <div>
            <label className="block font-medium mb-2">
              Nama File Gambar
            </label>

            <input
              type="text"
              className="w-full border rounded-lg p-3"
              placeholder="contoh: kebun-duren.jpg"
              value={imageName}
              onChange={(e) => setImageName(e.target.value)}
            />

            <p className="text-sm text-gray-500 mt-2">
              Gambar harus berada di folder:
              <span className="font-semibold">
                {" "}public/wisata/
              </span>
            </p>
          </div>

          {/* Preview */}
          {image && (
            <div>
              <p className="font-medium mb-3">
                Preview Gambar
              </p>

              <img
                src={image}
                alt={title || "Preview Wisata"}
                className="w-full max-w-md rounded-xl border object-cover"
              />
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => navigate("/admin/wisata")}
              className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              Batal
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-amber-500 hover:bg-amber-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              {loading ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}