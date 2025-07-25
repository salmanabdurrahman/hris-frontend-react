import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useEmployees from "../../../../hooks/useEmployees";
import { divisions } from "../../../../constants/dashboardPageData";
import toast from "react-hot-toast";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  division: "",
  position: "",
  image: null,
};

const EditEmployeeForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { id } = useParams();
  const { getEmployeeById, updateEmployee, deleteEmployee } = useEmployees();
  const navigate = useNavigate();

  useEffect(() => {
    const employee = getEmployeeById(id);
    if (employee) {
      setFormData({
        name: employee.name ?? "",
        email: employee.email ?? "",
        phone: employee.phone ?? "",
        division: employee.division.name ?? "",
        position: employee.position ?? "",
        image: employee.image ?? null,
      });
    }
  }, [id]);

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

  const toBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const handleFormSubmit = async e => {
    e.preventDefault();

    // simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.division || !formData.position) {
      alert("Please fill in all required fields.");
      return;
    }

    const dataToSubmit = { ...formData };

    // convert image to base64 if it exists
    if (typeof formData.image === "object" && formData.image instanceof File) {
      try {
        dataToSubmit.image = await toBase64(formData.image);
      } catch (error) {
        toast.error("Gagal mengonversi gambar, silakan coba lagi.");
        console.error("Image conversion error:", error);
        return;
      }
    }

    try {
      updateEmployee(id, dataToSubmit);
    } catch (error) {
      toast.error(error.message || "Gagal memperbarui data pegawai, silakan coba lagi.");
      console.error("Update employee error:", error);
      return;
    } finally {
      setFormData(initialFormData);
    }

    toast.success("Data pegawai berhasil diperbarui.");
    navigate("/dashboard");
  };

  const handleDeleteEmployee = () => {
    const isConfirmed = confirm("Apakah Anda yakin ingin menghapus pegawai ini? Tindakan ini tidak dapat diurungkan.");
    if (isConfirmed) {
      try {
        deleteEmployee(id);
      } catch (error) {
        toast.error(error.message || "Gagal menghapus pegawai, silakan coba lagi.");
        console.error("Delete employee error:", error);
        return;
      }

      toast.success("Pegawai berhasil dihapus.");
      navigate("/dashboard");
    }
  };

  return (
    <form method="POST" className="space-y-8" onSubmit={handleFormSubmit}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Edit Data Pegawai</h1>
          <p className="mt-1 text-gray-500 dark:text-gray-400">Perbarui informasi pegawai di bawah ini.</p>
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
            Update Data
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
                  id="name"
                  name="name"
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
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    name="division"
                    value={formData.division}
                    onChange={handleChangeInput}
                    required
                  >
                    <option hidden>Pilih Divisi</option>
                    {divisions.map(division => (
                      <option key={division.id} value={division.name}>
                        {division.name}
                      </option>
                    ))}
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
        <div className="space-y-8 lg:col-span-1">
          <div className="animate-fade-in-up rounded-lg bg-white p-8 shadow dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Foto Profil</h3>
            <div className="flex w-full items-center justify-center">
              <label
                htmlFor="image"
                className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div
                  id="upload-prompt"
                  className={`flex flex-col items-center justify-center pt-5 pb-6 ${formData.image ? "hidden" : ""}`}
                >
                  <i className="bx bx-cloud-upload text-4xl text-gray-500 dark:text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Klik untuk upload</span> atau seret file
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG (MAX. 1MB)</p>
                </div>
                <img
                  id="image-preview"
                  src={formData.image instanceof File ? URL.createObjectURL(formData.image) : formData.image}
                  alt="Image Preview"
                  className={`h-full w-full rounded-lg object-cover ${formData.image ? "" : "hidden"}`}
                  loading="lazy"
                />
                <input
                  id="image"
                  type="file"
                  name="image"
                  className="hidden"
                  accept="image/jpg, image/jpeg, image/png"
                  onChange={handleChangeInput}
                />
              </label>
            </div>
            {formData.image && (
              <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                Silakan unggah foto profil pegawai. Ukuran maksimal 1MB, format PNG atau JPG.
              </p>
            )}
          </div>
          <div className="animate-fade-in-up rounded-lg bg-white p-8 shadow dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-semibold text-red-600 dark:text-red-500">Zona Berbahaya</h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              Tindakan ini tidak dapat diurungkan. Pastikan Anda benar-benar yakin.
            </p>
            <button
              id="delete-button"
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:ring-4 focus:ring-red-300 focus:outline-none dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
              onClick={handleDeleteEmployee}
            >
              <i className="bx bx-trash" />
              Hapus Pegawai Ini
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditEmployeeForm;
