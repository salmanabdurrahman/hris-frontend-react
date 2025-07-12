import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "../components/layouts/main/MainLayout";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
