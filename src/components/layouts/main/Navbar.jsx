import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <header className="sticky start-0 top-0 z-20 w-full border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md dark:border-gray-600 dark:bg-gray-900/80">
      <nav className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SimpleHRIS</span>
        </a>
        <div className="flex items-center md:order-2">
          <a
            href="/login"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Login Admin
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
