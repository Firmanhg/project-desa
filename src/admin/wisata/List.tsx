import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import DataTable, {
  type Column,
} from "../../components/admin/DataTable";

import ConfirmDelete from "../../components/admin/ConfirmDelete";

import {
  getAllWisata,
  deleteWisata,
} from "../../services/wisataService";

import type { Wisata } from "../../types/wisata";

export default function ListWisata() {
  const [wisata, setWisata] = useState<Wisata[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const loadData = async () => {
    try {
      setLoading(true);

      const result = await getAllWisata();

      setWisata(result);
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
      title: "Hapus Wisata",
      text: "Data wisata akan dihapus secara permanen.",
      onConfirm: async () => {
        await deleteWisata(id);
        await loadData();
      },
    });
  };

  const filteredWisata = wisata.filter((item) => {
    const keyword = search.toLowerCase();

    return (
      item.title.toLowerCase().includes(keyword) ||
      item.location.toLowerCase().includes(keyword) ||
      item.category.toLowerCase().includes(keyword)
    );
  });

  const columns: Column<Wisata>[] = [
    {
      header: "No",
      className: "w-16",
      render: (_, index) => index + 1,
    },

    {
      header: "Gambar",
      render: (item) => (
        <img
          src={item.image}
          alt={item.title}
          className="w-24 h-16 object-cover rounded-lg border"
        />
      ),
    },

    {
      header: "Nama Wisata",
      render: (item) => (
        <div>
          <p className="font-semibold">
            {item.title}
          </p>

          <p className="text-sm text-gray-500">
            {item.location}
          </p>
        </div>
      ),
    },

    {
      header: "Kategori",
      render: (item) => (
        <span className="inline-block whitespace-nowrap bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
          {item.category}
        </span>
      ),
    },

    {
      header: "Aksi",
      className: "w-48",
      render: (item) => (
        <div className="flex gap-2">

          <Link
            to={`/admin/wisata/edit/${item.id}`}
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
          placeholder="🔍 Cari wisata..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

      </div>
      <DataTable
        title="Data Wisata"
        data={filteredWisata}
        loading={loading}
        emptyMessage="Belum ada data wisata."
        addButton={
          <Link
            to="/admin/wisata/tambah"
            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            + Tambah Wisata
          </Link>
        }
        columns={columns}
      />

    </div>
  );
}