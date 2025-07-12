import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SimpleHRIS</span>
            </Link>
            <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">Solusi Manajemen SDM Terintegrasi.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Perusahaan</h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Karir
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <Link to="/" className="hover:underline">
              SimpleHRIS™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
