import axios from "axios";
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap";
import EmployeeModal from "./employeeModal";

const Employees = () => {
    const [employees, setEmployees] = useState([] as Employee[]);
    const [editEmployee, setEditEmployee] = useState(false);
    const [employee, setEmployee] = useState({} as Employee);

    useEffect(() => {
        getEmployeeData().then(response => {
            setEmployees(response.data);
        });

    }, []);

    async function getEmployeeData() {
        return await axios.get('https://employeemanagement-production-3f79.up.railway.app/api/v1/employees');
    }

    async function deleteEmployee(id : number) {
        await axios.delete(`https://employeemanagement-production-3f79.up.railway.app/api/v1/employees/${id}`);
        setEmployees(employees.filter(employee => employee.id !== id));
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employe, index) => <tr key={index}>
                            <td>{employe.firstName}</td>
                            <td>{employe.lastName}</td>
                            <td>{employe.emailId}</td>
                            <td>
                                <Button variant="primary" className="btn-sm m-1" onClick={() => {
                                    setEmployee(employe);
                                    setEditEmployee(true);
                                }}><i className="fa fa-edit"></i></Button>
                                <Button variant="danger" className="btn-sm m-1" onClick={() => deleteEmployee(employe.id)}><i className="fa fa-trash"></i></Button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            {
                editEmployee && 
                <EmployeeModal 
                    show={editEmployee} 
                    onHide={() => setEditEmployee(false)}
                    onEdit={(employee : Employee) => employees.map((emp, index) => emp.id == employee.id ? employees[index] = employee : emp)}
                    heading="Edit"
                    employee={employee}/>
            }
            
        </>
    )
}

export default Employees