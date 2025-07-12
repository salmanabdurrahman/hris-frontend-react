const DashboardPagination = () => {
  return (
    <nav className="flex flex-col items-center justify-between pt-4 sm:flex-row" aria-label="Table navigation">
      <span className="mb-4 text-sm font-normal text-gray-500 md:mb-0 dark:text-gray-400">
        Menampilkan <span className="font-semibold text-gray-900 dark:text-white">1-4</span> dari{" "}
        <span className="font-semibold text-gray-900 dark:text-white">124</span>
      </span>
      <ul className="inline-flex h-8 -space-x-px text-sm rtl:space-x-reverse">
        <li>
          <a
            href="#"
            className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Sebelumnya
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            className="flex h-8 items-center justify-center border border-gray-300 bg-blue-50 px-3 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Selanjutnya
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardPagination;
