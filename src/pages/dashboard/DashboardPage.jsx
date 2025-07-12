import DashboardActions from "../../components/features/dashboard/DashboardActions";
import DashboardHeader from "../../components/features/dashboard/DashboardHeader";
import DashboardStatistics from "../../components/features/dashboard/DashboardStatistics";
import DashboardTable from "../../components/features/dashboard/DashboardTable";
import DashboardPagination from "./../../components/features/dashboard/DashboardPagination";

const DashboardPage = () => {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <DashboardHeader />
        <DashboardStatistics />
        <DashboardActions />
        <DashboardTable />
        <DashboardPagination />
      </div>
    </main>
  );
};

export default DashboardPage;
