import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Layout from "../components/layouts/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import EditProfilePage from "../pages/dashboard/EditProfilePage";
import AddEmployeePage from "../pages/dashboard/AddEmployeePage";
import EditEmployeePage from "../pages/dashboard/EditEmployeePage";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* Auth Routes */}
        <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />} />
        {/* Dashboard Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<DashboardPage />} />
            <Route path="edit-profile" element={<EditProfilePage />} />
            <Route path="add-employee" element={<AddEmployeePage />} />
            <Route path="edit-employee/:id" element={<EditEmployeePage />} />
          </Route>
        </Route>
        {/* Catch-all Route */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
