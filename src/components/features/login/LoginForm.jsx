import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const initialFormData = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    // simple validation
    if (formData.username === "" || formData.password === "") {
      toast.error("Username dan Password tidak boleh kosong!");
      return;
    }

    try {
      login(formData);
    } catch (error) {
      toast.error(error.message || "Login gagal, silakan coba lagi.");
      console.error("Login error:", error);
      return;
    } finally {
      setFormData(initialFormData);
    }

    toast.success("Anda telah berhasil login.");
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 lg:p-12">
      <div className="w-full max-w-md">
        <div className="mb-10 text-center lg:text-left">
          <Link to="/" className="mb-4 inline-flex items-center justify-center space-x-3 lg:justify-start">
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">SimpleHRIS</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Selamat Datang Kembali</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Login untuk mengakses dashboard admin.</p>
        </div>
        <form className="space-y-6" method="POST" onSubmit={handleFormSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Username
              </label>
              <div className="focus:glow mt-1 rounded-lg">
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  value={formData.username}
                  onChange={handleChangeInput}
                  placeholder="Gunakan: admin"
                  autoComplete="username"
                  autoFocus
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <div className="focus:glow mt-1 rounded-lg">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  value={formData.password}
                  onChange={handleChangeInput}
                  placeholder="Gunakan: admin123"
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                Ingat saya
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
        <div className="my-6 flex items-center justify-center">
          <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
          <div className="px-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">Atau login dengan</div>
          <div className="h-px w-full bg-gray-200 dark:bg-gray-700" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800">
            <i className="bx bxl-google text-xl text-red-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Google</span>
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800">
            <i className="bx bxl-microsoft text-xl text-blue-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Microsoft</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
