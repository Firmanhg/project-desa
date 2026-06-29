import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Profil from "../pages/Profil";
import Wisata from "../pages/Wisata";
import DetailWisata from "../pages/DetailWisata";
import Umkm from "../pages/Umkm";
import Galeri from "../pages/Galeri";
import Kontak from "../pages/Kontak";
import Berita from "../pages/Berita";

import AdminRoutes from "./AdminRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      {/* WEBSITE */}
      <Route path="/" element={<Home />} />
      <Route path="/profil" element={<Profil />} />

      {/* WISATA */}
      <Route path="/wisata" element={<Wisata />} />
      <Route path="/wisata/:id" element={<DetailWisata />} />

      {/* WEBSITE LAIN */}
      <Route path="/umkm" element={<Umkm />} />
      <Route path="/galeri" element={<Galeri />} />
      <Route path="/kontak" element={<Kontak />} />
      <Route path="/berita" element={<Berita />} />

      {/* ADMIN */}
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
}