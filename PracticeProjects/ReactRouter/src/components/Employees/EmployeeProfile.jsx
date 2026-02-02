import { useLoaderData } from "react-router"

export default function EmployeeProfile() {
  const employeeDetails = useLoaderData().data;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Profile</h2>
      <p>ID: {employeeDetails.id}</p>
      <p>Name: {employeeDetails.employee_name}</p>
      <p>Age: {employeeDetails.employee_age}</p>
      <p>Salary: {employeeDetails.employee_salary}</p>
    </div>
  );
}
