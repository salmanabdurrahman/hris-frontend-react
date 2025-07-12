const LoginIllustration = () => {
  return (
    <div className="hidden flex-col items-center justify-center bg-blue-50 p-12 text-center lg:flex dark:bg-gray-800/50">
      <img
        src="/assets/images/hrd-illustration.webp"
        alt="Ilustrasi Sistem HR"
        className="mb-8 max-w-lg rounded-lg"
        loading="lazy"
      />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Manajemen SDM di Ujung Jari Anda</h2>
      <p className="mt-2 max-w-md text-gray-600 dark:text-gray-400">
        Akses semua data, laporan, dan alat manajemen karyawan dengan mudah dan aman.
      </p>
    </div>
  );
};

export default LoginIllustration;
