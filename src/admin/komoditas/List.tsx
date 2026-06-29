import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import DataTable, {
  type Column,
} from "../../components/admin/DataTable";

import TableSkeleton from "../../components/admin/TableSkeleton";

import ConfirmDelete from "../../components/admin/ConfirmDelete";

import {
  getAllKomoditas,
  deleteKomoditas,
} from "../../services/komoditasService";

import type { Komoditas } from "../../types/komoditas";

export default function ListKomoditas() {
  const [komoditas, setKomoditas] = useState<Komoditas[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    try {
      setLoading(true);

      const result = await getAllKomoditas();

      setKomoditas(result);
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
      title: "Hapus Komoditas",
      text: "Data komoditas akan dihapus secara permanen.",
      onConfirm: async () => {
        await deleteKomoditas(id);
        await loadData();
      },
    });
  };

  const filteredKomoditas = komoditas.filter((item) => {
    const keyword = search.toLowerCase();

    return (
      item.title.toLowerCase().includes(keyword) ||
      item.category.toLowerCase().includes(keyword)
    );
  });

  const columns: Column<Komoditas>[] = [
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
      header: "Nama Komoditas",
      render: (item) => (
        <div>
          <p className="font-semibold">
            {item.title}
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
            to={`/admin/komoditas/edit/${item.id}`}
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

  if (loading) {
    return (
      <div className="p-6">
        <TableSkeleton />
      </div>
    );
  }

  return (
    <div className="p-6">

      <div className="mb-6">

        <input
          type="text"
          placeholder="🔍 Cari komoditas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
        />

      </div>

      <DataTable
        title="Data Komoditas"
        data={filteredKomoditas}
        loading={false}
        emptyMessage="Belum ada data komoditas."
        addButton={
          <Link
            to="/admin/komoditas/tambah"
            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            + Tambah Komoditas
          </Link>
        }
        columns={columns}
      />

    </div>
  );
}