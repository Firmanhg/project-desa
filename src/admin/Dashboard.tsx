import { useEffect, useState } from "react";

import {
  getDashboardData,
  type DashboardData,
} from "../services/dashboardService";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  const [data, setData] =
    useState<DashboardData>({
      totalWisata: 0,
      totalKomoditas: 0,
      totalGaleri: 0,
      jumlahPenduduk: 0,
      jumlahKK: 0,
    });

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const result =
          await getDashboardData();

        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-xl">
        Memuat Dashboard...
      </div>
    );
  }

  return (
    <div>

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Selamat datang di CMS Desa Karang Jaya
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-green-600">

          <p className="text-gray-500">
            Total Wisata
          </p>

          <h2 className="text-5xl font-bold mt-3 text-green-700">
            {data.totalWisata}
          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-amber-500">

          <p className="text-gray-500">
            Total Komoditas
          </p>

          <h2 className="text-5xl font-bold mt-3 text-amber-600">
            {data.totalKomoditas}
          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-blue-600">

          <p className="text-gray-500">
            Total Galeri
          </p>

          <h2 className="text-5xl font-bold mt-3 text-blue-600">
            {data.totalGaleri}
          </h2>

        </div>
        <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-purple-600">

<p className="text-gray-500">
  Jumlah Penduduk
</p>

<h2 className="text-5xl font-bold mt-3 text-purple-600">
  {data.jumlahPenduduk}
</h2>

</div>

<div className="bg-white rounded-2xl shadow p-6 border-l-4 border-pink-600">

<p className="text-gray-500">
  Jumlah Kepala Keluarga
</p>

<h2 className="text-5xl font-bold mt-3 text-pink-600">
  {data.jumlahKK}
</h2>

</div>

<div className="bg-white rounded-2xl shadow p-6 border-l-4 border-emerald-600 flex flex-col justify-between">

<p className="text-gray-500">
  Status Sistem
</p>

<div className="mt-3 flex items-center gap-3">

  <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>

  <h2 className="text-2xl font-bold text-green-600">
    Online
  </h2>

</div>

<p className="text-sm text-gray-400 mt-4">
  Firebase Connected
</p>

</div>

</div>

</div>
);
}