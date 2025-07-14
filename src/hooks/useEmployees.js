import { useLocalStorage } from "react-use";
import { dummyEmployees } from "../constants/dashboardPageData";

const useEmployees = () => {
  const [employees, setEmployees] = useLocalStorage("employees", dummyEmployees);

  const createEmployee = employeeData => {
    const newEmployee = {
      ...employeeData,
      id: crypto.randomUUID(),
      division: {
        id: crypto.randomUUID(),
        name: employeeData.division,
      },
    };

    console.log("Creating new employee:", newEmployee);

    setEmployees(prevEmployees => [newEmployee, ...prevEmployees]);
  };

  const updateEmployee = (id, updatedData) => {
    setEmployees(prevEmployees =>
      prevEmployees.map(employee =>
        employee.id === id
          ? { ...employee, ...updatedData, division: { id: crypto.randomUUID(), name: updatedData.division } }
          : employee
      )
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
