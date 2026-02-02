import React from 'react'
import { useState, useEffect } from 'react';

export default function List() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3004/employees")
        .then((res) => res.json())
        .then((data) => {setEmployees(data);
            console.log(data);
        });
    }, []);
    return (
        <>
        <div className='min-h-screen flex items-center justify-center bg-gray-100 p-10 '>
        <div className="bg-white p-6 rounded-lg shadow-md w-full space-y-4">
        <h2 className="text-xl font-semibold mb-4">Registered Employees</h2>

        <table className="w-full border">
            <thead className="bg-gray-200">
            <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">DOB</th>
                <th className="border p-2">Gender</th>
                <th className="border p-2">State</th>
                <th className="border p-2">City</th>
                <th className="border p-2">Address</th>
                <th className="border p-2">Hobbies</th>
            </tr>
            </thead>
            <tbody>
            {employees.map((emp) => (
                <tr key={emp.id}>
                <td className="border p-2">{emp.name}</td>
                <td className="border p-2">{emp.email}</td>
                <td className="border p-2">{emp.dob}</td>
                <td className="border p-2">{emp.gender}</td>
                <td className="border p-2">{emp.state}</td>
                <td className="border p-2">{emp.city}</td>
                <td className="border p-2">{emp.address}</td>
                <td className="border p-2">{emp.hobbies.map((hobby) => hobby + ",")}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        </div>
        </>
    )
}
