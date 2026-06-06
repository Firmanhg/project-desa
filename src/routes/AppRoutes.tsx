import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Profil from "../pages/Profil";
import Wisata from "../pages/Wisata";
import Umkm from "../pages/Umkm";
import Galeri from "../pages/Galeri";
import Kontak from "../pages/Kontak";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/wisata" element={<Wisata />} />
      <Route path="/umkm" element={<Umkm />} />
      <Route path="/galeri" element={<Galeri />} />
      <Route path="/kontak" element={<Kontak />} />
    </Routes>
  );
}

export default AppRoutes;