import { useMemo, useState } from "react";
import DashboardActions from "../../components/features/dashboard/DashboardActions";
import DashboardHeader from "../../components/features/dashboard/DashboardHeader";
import DashboardStatistics from "../../components/features/dashboard/DashboardStatistics";
import DashboardTable from "../../components/features/dashboard/DashboardTable";
import DashboardPagination from "./../../components/features/dashboard/DashboardPagination";
import { dummyEmployees } from "../../constants/dashboardPageData";

const DashboardPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const dataPerPage = 7;

  const filteredEmployees = useMemo(() => {
    return dummyEmployees.filter(employee => {
      const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDivision = selectedDivision ? employee.division.name === selectedDivision : true;
      return matchesSearch && matchesDivision;
    });
  }, [dummyEmployees, searchTerm, selectedDivision]);

  const indexOfLastEmployee = currentPage * dataPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - dataPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleDivisionChange = e => {
    setSelectedDivision(e.target.value);
  };

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <DashboardHeader />
        <DashboardStatistics />
        <DashboardActions
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onDivisionChange={handleDivisionChange}
          selectedDivision={selectedDivision}
        />
        <DashboardTable employees={currentEmployees} />
        <DashboardPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          dataPerPage={dataPerPage}
          totalData={filteredEmployees.length}
        />
      </div>
    </main>
  );
};

export default DashboardPage;
