const EditProfileSecurity = () => {
  return (
    <div className="lg:col-span-1">
      <div
        className="animate-fade-in-up rounded-lg bg-white p-8 shadow dark:bg-gray-800"
        style={{ animationDelay: "100ms" }}
      >
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Keamanan</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="current-password" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Password Saat Ini
            </label>
            <input
              type="password"
              id="current-password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
              placeholder="Masukkan password saat ini"
              required
            />
          </div>
          <div>
            <label htmlFor="new-password" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Password Baru
            </label>
            <input
              type="password"
              id="new-password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
              placeholder="Masukkan password baru"
              required
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Konfirmasi Password Baru
            </label>
            <input
              type="password"
              id="confirm-password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
              placeholder="Masukkan konfirmasi password baru"
              required
            />
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="w-full rounded-lg bg-gray-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Ubah Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileSecurity;
