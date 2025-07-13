import { dummyEmployees } from "../../../constants/dashboardPageData";

const DashboardStatistics = () => {
  return (
    <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow dark:bg-gray-800">
        <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/50">
          <i className="bx bxs-group text-2xl text-blue-500" />
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Total Pegawai</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{dummyEmployees.length}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow dark:bg-gray-800">
        <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/50">
          <i className="bx bxs-user-check text-2xl text-green-500" />
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Pegawai Aktif</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{dummyEmployees.length}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow dark:bg-gray-800">
        <div className="rounded-full bg-yellow-100 p-3 dark:bg-yellow-900/50">
          <i className="bx bxs-plane-alt text-2xl text-yellow-500" />
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Sedang Cuti</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">0</p>
        </div>
      </div>
      <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow dark:bg-gray-800">
        <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/50">
          <i className="bx bxs-user-x text-2xl text-red-500" />
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Non-Aktif</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">0</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatistics;
