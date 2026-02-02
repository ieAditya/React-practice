import { Link, useLoaderData } from "react-router"

import React from "react";

function EmployeeTable({ employees }) {
  return (
    <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.employee_name}</td>
            <td>{emp.employee_age}</td>
            <td>{emp.employee_salary}</td>
            <td>
                <Link to={`/employee/${emp.id}`}
                >Show Profile</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Employees() {
  const employees = useLoaderData().data;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee List</h2>
      <EmployeeTable employees={employees} />
    </div>
  );
}


// function Employees() {
//     const employeesList = useLoaderData()
//     return (
//         <>
//         {console.log(employeesList.data)}
//         <h1>Done</h1>
//         </>
//         // <div className="flex m-8 bg-gray-200">
//         //     <img src={gitHubInfo.avatar_url} alt="Github profile picture" className="inline p-4" width={300}/>
//         //     <div className="p-4">
//         //         <h1 className="">Name:</h1>
//         //         <h1 className="">Bio:</h1>
//         //         <h1 className="">Followers:</h1>
//         //         <h1 className="">Following:</h1>
//         //         <h1 className="">Repositories:</h1>
//         //     </div>
//         //     <div className="p-4">
//         //         <h1 className="">{gitHubInfo.name}</h1>
//         //         <h1 className="">{gitHubInfo.bio}</h1>
//         //         <h1 className="">{gitHubInfo.followers}</h1>
//         //         <h1 className="">{gitHubInfo.following}</h1>
//         //         <h1 className="">{gitHubInfo.public_repos}</h1>
//         //     </div>
//         // </div>
//     )
// }

// export default Employees