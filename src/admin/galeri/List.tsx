import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import DataTable, {
  type Column,
} from "../../components/admin/DataTable";

import ConfirmDelete from "../../components/admin/ConfirmDelete";

import {
  getAllGaleri,
  deleteGaleri,
} from "../../services/galeriService";

import type { Galeri } from "../../types/galeri";

export default function ListGaleri() {
  const [galeri, setGaleri] = useState<Galeri[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const loadData = async () => {
    try {
      setLoading(true);

      const result = await getAllGaleri();

      setGaleri(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id: string) => {
    await ConfirmDelete({
      title: "Hapus Foto",
      text: "Foto galeri akan dihapus secara permanen.",
      onConfirm: async () => {
        await deleteGaleri(id);
        await loadData();
      },
    });
  };

  const filteredGaleri = galeri.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const columns: Column<Galeri>[] = [
    {
      header: "No",
      className: "w-16",
      render: (_, index) => index + 1,
    },

    {
      header: "Foto",
      render: (item) => (
        <img
          src={item.image}
          alt={item.title}
          className="w-24 h-16 object-cover rounded-lg border"
        />
      ),
    },

    {
      header: "Judul",
      render: (item) => (
        <p className="font-semibold">
          {item.title}
        </p>
      ),
    },

    {
      header: "Aksi",
      className: "w-48",
      render: (item) => (
        <div className="flex gap-2">

          <Link
            to={`/admin/galeri/edit/${item.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            Edit
          </Link>

          <button
            onClick={() => handleDelete(item.id!)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            Hapus
          </button>

        </div>
      ),
    },
  ];

  return (
    <div className="p-6">

      <div className="mb-6">

        <input
          type="text"
          placeholder="🔍 Cari galeri..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

      </div>
      <DataTable
        title="Data Galeri"
        data={filteredGaleri}
        loading={loading}
        emptyMessage="Belum ada data galeri."
        addButton={
          <Link
            to="/admin/galeri/tambah"
            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            + Tambah Foto
          </Link>
        }
        columns={columns}
      />

    </div>
  );
}