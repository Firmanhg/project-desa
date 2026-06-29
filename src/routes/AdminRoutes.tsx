import { Routes, Route } from "react-router-dom";

import Login from "../admin/Login";
import Dashboard from "../admin/Dashboard";
import Layout from "../admin/Layout";

import ListWisata from "../admin/wisata/List";
import TambahWisata from "../admin/wisata/Tambah";
import EditWisata from "../admin/wisata/Edit";

import ListKomoditas from "../admin/komoditas/List";
import TambahKomoditas from "../admin/komoditas/Tambah";
import EditKomoditas from "../admin/komoditas/Edit";

import ListGaleri from "../admin/galeri/List";
import TambahGaleri from "../admin/galeri/Tambah";
import EditGaleri from "../admin/galeri/Edit";

import EditProfil from "../admin/profil/Edit";
import EditKontak from "../admin/kontak/Edit";

import ProtectedRoute from "./ProtectedRoute";

export default function AdminRoutes() {
  return (
    <Routes>
      {/* LOGIN */}
      <Route path="/login" element={<Login />} />

      {/* ADMIN */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        {/* Dashboard */}
        <Route index element={<Dashboard />} />

        {/* ================= WISATA ================= */}
        <Route path="wisata" element={<ListWisata />} />
        <Route path="wisata/tambah" element={<TambahWisata />} />
        <Route path="wisata/edit/:id" element={<EditWisata />} />

        {/* ================= KOMODITAS ================= */}
        <Route path="komoditas" element={<ListKomoditas />} />
        <Route path="komoditas/tambah" element={<TambahKomoditas />} />
        <Route path="komoditas/edit/:id" element={<EditKomoditas />} />

        {/* ================= GALERI ================= */}
        <Route path="galeri" element={<ListGaleri />} />
        <Route path="galeri/tambah" element={<TambahGaleri />} />
        <Route path="galeri/edit/:id" element={<EditGaleri />} />

        {/* ================= PROFIL ================= */}
        <Route path="profil" element={<EditProfil />} />

        {/* ================= KONTAK ================= */}
        <Route path="kontak" element={<EditKontak />} />
      </Route>
    </Routes>
  );
}