const DashboardTable = () => {
  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow dark:bg-gray-800">
      <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="bg-gray-100 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Pegawai
            </th>
            <th scope="col" className="px-6 py-3">
              Jabatan
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            className="table-row-animate border-b bg-white transition-colors duration-200 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700/50"
            style={{ animationDelay: "100ms" }}
          >
            <th scope="row" className="flex items-center px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
              <img
                className="h-10 w-10 rounded-full"
                src="https://i.pravatar.cc/40?u=budi"
                alt="Budi image"
                loading="lazy"
              />
              <div className="ps-3">
                <div className="text-base font-semibold">Budi Santoso</div>
                <div className="font-normal text-gray-500">budi.s@company.com</div>
              </div>
            </th>
            <td className="px-6 py-4">
              <div className="font-semibold">Senior Frontend Developer</div>
              <div className="text-sm text-gray-500">Frontend</div>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="me-2 h-2.5 w-2.5 rounded-full bg-green-500" /> Aktif
              </div>
            </td>
            <td className="px-6 py-4 text-center">
              <a href="" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
