import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}

      <header className="bg-white shadow-sm px-8 py-4">

        <h1 className="text-2xl font-bold text-amber-600">
          Katalog Karang Jaya
        </h1>

      </header>

      {/* Content */}

      <main className="p-8">

        <Outlet />

      </main>

    </div>
  );
}