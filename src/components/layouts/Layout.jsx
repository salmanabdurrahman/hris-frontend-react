import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import HomeFooter from "./HomeFooter";
import DashboardFooter from "./DashboardFooter";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      <Outlet />
      {!pathname.startsWith("/dashboard") ? <HomeFooter /> : <DashboardFooter />}
    </>
  );
};

export default Layout;
