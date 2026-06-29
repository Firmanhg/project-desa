import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import { addGaleri } from "../../services/galeriService";

export default function TambahGaleri() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [imageName, setImageName] = useState("");

  const image = imageName
    ? `/galeri/${imageName}`
    : "";

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await addGaleri({
        title,
        image,
      });

      await Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Foto galeri berhasil ditambahkan.",
      });

      navigate("/admin/galeri");

    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal menambahkan foto galeri.",
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">

      <div className="bg-white rounded-2xl shadow p-8">

        <h1 className="text-3xl font-bold mb-8">
          Tambah Foto Galeri
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Judul */}
          <div>

            <label className="font-medium">
              Judul Foto
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

          </div>

          {/* Nama File */}
          <div>

            <label className="font-medium">
              Nama File Gambar
            </label>

            <input
              placeholder="contoh: kebun-duren.jpg"
              className="w-full border rounded-lg p-3 mt-2"
              value={imageName}
              onChange={(e) => setImageName(e.target.value)}
              required
            />

          </div>

          {/* Preview */}
          {image && (
            <div>

              <p className="font-medium mb-3">
                Preview
              </p>

              <img
                src={image}
                alt="Preview"
                className="rounded-xl h-60 object-cover border"
              />

            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg disabled:opacity-50"
          >
            {loading ? "Menyimpan..." : "Simpan"}
          </button>

        </form>

      </div>

    </div>
  );
}