import { useState } from "react";
import EmployeeModal from "./employeeModal";

const Header = () => {

    const [addEmployee, setAddEmployee] = useState(false);

    return (
        <>
            <nav className="header navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><strong><i>Employee Management</i></strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" style={{ justifyContent: "flex-end" }} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Employees</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => !addEmployee && setAddEmployee(true)}>New Employee</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {
                addEmployee && 
                <EmployeeModal 
                    show={addEmployee} 
                    onHide={() => setAddEmployee(false)}
                    heading="Add"
                    employee={{}}/>
            
            }
            
        </>
    )
}

export default Header;