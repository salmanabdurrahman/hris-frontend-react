const DashboardPagination = ({ dataPerPage, totalData, setCurrentPage, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <nav className="flex flex-col items-center justify-between pt-4 sm:flex-row" aria-label="Table navigation">
      <div></div>
      <ul className="inline-flex h-8 -space-x-px text-sm rtl:space-x-reverse">
        <li>
          <button
            type="button"
            className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={e => paginate(currentPage - 1, e)}
            disabled={currentPage === 1}
          >
            Sebelumnya
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number}>
            <a
              href="!#"
              aria-current="page"
              className={
                currentPage === number
                  ? "flex h-8 items-center justify-center border border-gray-300 bg-blue-50 px-3 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  : "flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              }
              onClick={e => paginate(number, e)}
            >
              {number}
            </a>
          </li>
        ))}
        <li>
          <button
            type="button"
            className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={e => paginate(currentPage + 1, e)}
            disabled={currentPage === pageNumbers.length}
          >
            Selanjutnya
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardPagination;
