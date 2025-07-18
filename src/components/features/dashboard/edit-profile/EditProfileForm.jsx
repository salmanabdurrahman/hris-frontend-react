import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";

const EditProfileForm = () => {
  const { user, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    username: user?.username || "",
    email: user?.email || "",
  });

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
    if (!formData.name || !formData.username) {
      alert("Silakan isi semua field yang diperlukan.");
      return;
    }

    try {
      updateProfile(formData);
    } catch (error) {
      toast.error(error.message || "Gagal memperbarui profil, silakan coba lagi.");
      console.error("Update profile error:", error);
      return;
    }

    toast.success("Profil berhasil diperbarui.");
  };

  return (
    <div className="lg:col-span-2">
      <div className="animate-fade-in-up rounded-lg bg-white p-8 shadow dark:bg-gray-800">
        <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Profil Akun</h1>
        <form id="profile-form" method="POST" className="space-y-8" onSubmit={handleFormSubmit}>
          <div className="flex items-center gap-6">
            <img
              className="h-24 w-24 rounded-full object-cover ring-4 ring-blue-200 dark:ring-blue-800"
              src={user?.image || "https://i.pravatar.cc/100?u=admin"}
              alt="Admin photo"
            />
            <div>
              <h2 id="profile-name-header" className="text-2xl font-bold text-gray-900 dark:text-white">
                {user?.name}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">{user?.email}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Informasi Pribadi</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Masukkan nama lengkap"
                  value={formData.name}
                  onChange={handleChangeInput}
                  required
                  autoFocus
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  value={formData.username}
                  onChange={handleChangeInput}
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  disabled
                  className="block w-full cursor-not-allowed rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                  value={formData.email}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4">
            <Link
              to="/dashboard"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Batal
            </Link>
            <button
              id="save-button"
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none sm:w-auto dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
              <span id="save-button-text">Simpan Perubahan</span>
              <div id="save-spinner" className="spinner hidden" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
