import { useLocalStorage } from "react-use";
import { dummyEmployees } from "../constants/dashboardPageData";

const useEmployees = () => {
  const [employees, setEmployees] = useLocalStorage("employees", dummyEmployees);

  const createEmployee = employeeData => {
    const newEmployee = {
      id: crypto.randomUUID(),
      ...employeeData,
    };
    setEmployees(prevEmployees => [...prevEmployees, newEmployee]);
  };

  const updateEmployee = (id, updatedData) => {
    setEmployees(prevEmployees =>
      prevEmployees.map(employee => (employee.id === id ? { ...employee, ...updatedData } : employee))
    );
  };

  const deleteEmployee = id => {
    setEmployees(prevEmployees => prevEmployees.filter(employee => employee.id !== id));
  };

  const getEmployeeById = id => {
    return employees.find(employee => employee.id === id);
  };

  return {
    employees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById,
  };
};

export default useEmployees;
