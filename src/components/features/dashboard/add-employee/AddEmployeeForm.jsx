import { useState } from "react";
import { Link } from "react-router-dom";

const AddEmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    division: "",
    position: "",
    image: null,
  });

  const handleChangeInput = e => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData(prevData => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    // simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.division || !formData.position) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form submitted with data:", formData);
  };

  return (
    <form method="POST" className="space-y-8" onSubmit={handleFormSubmit}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Tambah Pegawai Baru</h1>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Isi formulir di bawah ini untuk menambahkan pegawai baru ke sistem.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/dashboard"
            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Batal
          </Link>
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Simpan Pegawai
          </button>
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="animate-fade-in-up rounded-lg bg-white p-8 shadow lg:col-span-2 dark:bg-gray-800">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Nama Lengkap
              </label>
              <div className="relative">
                <i className="bx bx-user absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Masukkan nama lengkap"
                  value={formData.name}
                  onChange={handleChangeInput}
                  required
                  autoFocus
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Alamat Email
              </label>
              <div className="relative">
                <i className="bx bx-envelope absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Masukkan alamat email"
                  value={formData.email}
                  onChange={handleChangeInput}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                No. Telepon
              </label>
              <div className="relative">
                <i className="bx bx-phone absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="08xxxxxxxxxx"
                  value={formData.phone}
                  onChange={handleChangeInput}
                  required
                />
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Informasi Pekerjaan</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="division" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Divisi
                  </label>
                  <select
                    id="division"
                    name="division"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    value={formData.division}
                    onChange={handleChangeInput}
                    required
                  >
                    <option hidden>Pilih Divisi</option>
                    <option value="Mobile Apps">Mobile Apps</option>
                    <option value="QA">QA</option>
                    <option value="Full Stack">Full Stack</option>
                    <option value="Backend">Backend</option>
                    <option value="Frontend">Frontend</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="position" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Jabatan
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Masukkan jabatan"
                    value={formData.position}
                    onChange={handleChangeInput}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="animate-fade-in-up rounded-lg bg-white p-8 shadow lg:col-span-1 dark:bg-gray-800"
          style={{ animationDelay: "100ms" }}
        >
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Foto Profil</h3>
          <div className="flex w-full items-center justify-center">
            <label
              htmlFor="image"
              className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div id="upload-prompt" className="flex flex-col items-center justify-center pt-5 pb-6">
                <i className="bx bx-cloud-upload text-4xl text-gray-500 dark:text-gray-400" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Klik untuk upload</span> atau seret file
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG (MAX. 1MB)</p>
              </div>
              <img
                id="image-preview"
                src="#"
                alt="Image Preview"
                className="hidden h-full w-full rounded-lg object-cover"
                loading="lazy"
              />
              <input
                id="image"
                type="file"
                name="image"
                className="hidden"
                accept="image/*"
                onChange={handleChangeInput}
              />
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddEmployeeForm;
