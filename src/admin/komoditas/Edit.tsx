import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";

import {
  getKomoditasById,
  updateKomoditas,
} from "../../services/komoditasService";

export default function EditKomoditas() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageName, setImageName] = useState("");

  const image = imageName
    ? `/komoditas/${imageName}`
    : "";

  useEffect(() => {
    const loadData = async () => {
      if (!id) return;

      try {
        const data = await getKomoditasById(id);

        if (!data) {
          Swal.fire({
            icon: "error",
            title: "Data tidak ditemukan",
          });

          navigate("/admin/komoditas");
          return;
        }

        setTitle(data.title);
        setCategory(data.category);
        setDescription(data.description);

        const filename = data.image.split("/").pop() || "";
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

      await updateKomoditas(id, {
        title,
        category,
        description,
        image,
      });

      await Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Komoditas berhasil diperbarui.",
      });

      navigate("/admin/komoditas");

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
          Edit Komoditas
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>

            <label className="font-medium">
              Nama Komoditas
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
              Kategori
            </label>

            <input
              className="w-full border rounded-lg p-3 mt-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
              Nama File Gambar
            </label>

            <input
              placeholder="contoh: duren.jpg"
              className="w-full border rounded-lg p-3 mt-2"
              value={imageName}
              onChange={(e) => setImageName(e.target.value)}
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