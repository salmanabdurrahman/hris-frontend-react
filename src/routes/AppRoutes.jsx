import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "../components/layouts/main/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import DashboardLayout from "../components/layouts/dashboard/DashboardLayout";
import DashboardPage from "../pages/dashboard/DashboardPage";

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
          <Route path="edit-profile" element={<h1>Edit Profile</h1>} />
          <Route path="add-employee" element={<h1>Add Employee</h1>} />
          <Route path="edit-employee/:id" element={<h1>Edit Employee</h1>} />
        </Route>
        {/* Catch-all Route */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
