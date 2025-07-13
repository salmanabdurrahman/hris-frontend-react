const HomeDetailedFeature = () => {
  return (
    <section className="overflow-hidden bg-white py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="animate-on-scroll order-2 md:order-1">
            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">Database Pegawai Terpusat</h3>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Simpan dan kelola semua informasi penting karyawan, mulai dari data pribadi, riwayat pekerjaan, dokumen
              kontrak, hingga data performa dalam satu database yang aman dan mudah diakses.
            </p>
            <ul className="mt-6 space-y-4 dark:text-slate-300">
              <li className="flex items-center gap-3">
                <i className="bx bx-check-circle text-2xl text-blue-500" />
                <span>Pencarian dan filter data yang cepat.</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="bx bx-check-circle text-2xl text-blue-500" />
                <span>Manajemen dokumen digital (e-docs).</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="bx bx-check-circle text-2xl text-blue-500" />
                <span>Notifikasi otomatis untuk kontrak yang akan berakhir.</span>
              </li>
            </ul>
          </div>
          <div className="animate-on-scroll order-1 md:order-2">
            <img
              src="/assets/images/dashboard-preview.webp"
              alt="Ilustrasi Dashboard Pegawai"
              className="w-full rounded-lg shadow-xl dark:shadow-gray-800"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDetailedFeature;
