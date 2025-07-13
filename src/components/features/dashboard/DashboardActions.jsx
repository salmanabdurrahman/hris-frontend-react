import { Link } from "react-router-dom";
import { divisions } from "../../../constants/dashboardPageData";

const DashboardActions = ({ searchTerm, onSearchChange, onDivisionChange, selectedDivision }) => {
  return (
    <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
      <div className="relative w-full md:w-1/3">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <i className="bx bx-search text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Cari nama pegawai..."
          className="w-full rounded-lg border border-gray-300 p-2.5 ps-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>
      <div className="relative w-full md:w-1/3">
        <select
          className="w-full rounded-lg border border-gray-300 p-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          value={selectedDivision}
          onChange={onDivisionChange}
        >
          <option key="all-divisions" value="">
            Semua Divisi
          </option>
          {divisions.map(division => (
            <option key={division.id} value={division.name}>
              {division.name}
            </option>
          ))}
        </select>
      </div>
      <Link
        to="/dashboard/add-employee"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-blue-700 md:w-auto"
      >
        <i className="bx bx-plus-circle text-lg" />
        <span>Tambah Pegawai</span>
      </Link>
    </div>
  );
};

export default DashboardActions;
