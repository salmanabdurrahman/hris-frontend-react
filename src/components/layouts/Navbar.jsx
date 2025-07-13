import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import useTheme from "./../../hooks/useTheme";
import useAuth from "./../../hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  }, [pathname]);

  const handleToggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="sticky start-0 top-0 z-20 w-full border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md dark:border-gray-600 dark:bg-gray-900/80">
      <nav className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link to="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SimpleHRIS</span>
        </Link>
        <div className="flex items-center space-x-3 md:order-2 md:space-x-4">
          <div className="flex items-center space-x-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
            <button
              id="theme-light-btn"
              className={`flex items-center rounded-md p-1.5 transition-colors ${theme === "light" ? "bg-white text-yellow-500 shadow dark:bg-gray-700 dark:text-yellow-400" : ""}`}
              aria-label="Light mode"
              onClick={() => toggleTheme("light")}
            >
              <i className="bx bxs-sun text-xl" />
            </button>
            <button
              id="theme-dark-btn"
              className={`flex items-center rounded-md p-1.5 transition-colors ${theme === "dark" ? "bg-white text-yellow-500 shadow dark:bg-gray-700 dark:text-yellow-400" : ""}`}
              aria-label="Dark mode"
              onClick={() => toggleTheme("dark")}
            >
              <i className="bx bxs-moon text-xl" />
            </button>
            <button
              id="theme-system-btn"
              className={`flex items-center rounded-md p-1.5 transition-colors ${theme === "system" ? "bg-white text-yellow-500 shadow dark:bg-gray-700 dark:text-yellow-400" : ""}`}
              aria-label="System mode"
              onClick={() => toggleTheme("system")}
            >
              <i className="bx bx-desktop text-xl" />
            </button>
          </div>
          {isAuthenticated && user ? (
            <div id="user-menu" className="relative">
              <button
                id="user-menu-button"
                type="button"
                className="flex items-center rounded-full bg-gray-200 text-sm focus:ring-4 focus:ring-gray-300 md:me-0 dark:bg-gray-700 dark:focus:ring-gray-600"
                onClick={handleToggleMenu}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-9 w-9 rounded-full object-cover"
                  src={user?.image || "https://i.pravatar.cc/40?u=admin"}
                  alt="user photo"
                  loading="lazy"
                />
                <span className="mx-3 hidden font-medium text-gray-700 md:block dark:text-gray-200">{user?.name}</span>
                <i
                  id="dropdown-chevron"
                  className={`bx bx-chevron-down mr-2 hidden text-xl text-gray-700 transition-transform md:block dark:text-gray-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                id="user-dropdown"
                className={`animate-fade-in-down absolute right-0 z-50 my-4 mt-2 w-48 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow-lg dark:divide-gray-600 dark:bg-gray-700 ${isOpen ? "" : "hidden"}`}
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">{user?.name}</span>
                  <span className="block truncate text-sm text-gray-500 dark:text-gray-400">@{user?.username}</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      to={!pathname.startsWith("/dashboard") ? "/dashboard" : "/"}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {!pathname.startsWith("/dashboard") ? "Dashboard" : "Beranda"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/edit-profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Profil
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
              Login Admin
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
