import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";

import {
  getGaleriById,
  updateGaleri,
} from "../../services/galeriService";

export default function EditGaleri() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [imageName, setImageName] = useState("");

  const image = imageName
    ? `/galeri/${imageName}`
    : "";

  useEffect(() => {
    const loadData = async () => {
      if (!id) return;

      try {
        const data = await getGaleriById(id);

        if (!data) {
          Swal.fire({
            icon: "error",
            title: "Data tidak ditemukan",
          });

          navigate("/admin/galeri");
          return;
        }

        setTitle(data.title);

        const filename =
          data.image.split("/").pop() || "";

        setImageName(filename);

      } catch (error) {
        console.error(error);

        Swal.fire({
          icon: "error",
          title: "Gagal mengambil data",
        });

      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id, navigate]);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!id) return;

    try {
      setSaving(true);

      await updateGaleri(id, {
        title,
        image,
      });

      await Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Foto galeri berhasil diperbarui.",
      });

      navigate("/admin/galeri");

    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Data gagal diperbarui.",
      });

    } finally {
      setSaving(false);
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
    <div className="max-w-3xl mx-auto">

      <div className="bg-white rounded-2xl shadow p-8">

        <h1 className="text-3xl font-bold mb-8">
          Edit Foto Galeri
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

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
            disabled={saving}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg disabled:opacity-50"
          >
            {saving ? "Menyimpan..." : "Update"}
          </button>

        </form>

      </div>

    </div>
  );
}