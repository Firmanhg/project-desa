import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { login } from "../services/authService";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Email dan Password wajib diisi!",
      });

      return;
    }

    try {
      setLoading(true);

      await login(email, password);

      Swal.fire({
        icon: "success",
        title: "Berhasil Login",
        text: "Selamat datang Admin!",
        timer: 1200,
        showConfirmButton: false,
      });

      navigate("/admin");
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-100 px-5">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10">

        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-gray-800">
            Katalog Karang Jaya
          </h1>

          <p className="text-gray-500 mt-2">
            Admin Dashboard
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none"
              placeholder="admin@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-600 transition text-white py-3 rounded-xl font-semibold"
          >
            {loading ? "Loading..." : "Login"}
          </button>

        </form>

      </div>
    </div>
  );
}