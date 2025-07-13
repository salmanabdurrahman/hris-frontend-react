import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "../components/layouts/main/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import DashboardLayout from "../components/layouts/dashboard/DashboardLayout";
import DashboardPage from "../pages/dashboard/DashboardPage";
import EditProfilePage from "../pages/dashboard/EditProfilePage";
import AddEmployeePage from "../pages/dashboard/AddEmployeePage";
import EditEmployeePage from "../pages/dashboard/EditEmployeePage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="edit-profile" element={<EditProfilePage />} />
          <Route path="add-employee" element={<AddEmployeePage />} />
          <Route path="edit-employee/:id" element={<EditEmployeePage />} />
        </Route>
        {/* Catch-all Route */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
