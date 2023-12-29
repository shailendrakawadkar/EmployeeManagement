import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EmployeeModal = (props : any) => {
    const [employee, setEmployee] = useState(props.employee as Employee);

    const submitEmployee = async () => {
        await axios.post('https://employeemanagement-production-3f79.up.railway.app/api/v1/employees', employee);
        props.onHide();
    }

    const updateEmployee = async (id : number) => {
      await axios.put(`https://employeemanagement-production-3f79.up.railway.app/api/v1/employees/${id}`, employee);
      props.onEdit(employee);
      props.onHide();
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.heading} Employee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body> 
        <form>
            <div className='m-2'>
                <label htmlFor="firstName">First Name</label>
                <input type="text" className='form-control' value={employee?.firstName} name="firstName" id="firstName" onChange={(e : any) => setEmployee({...employee, firstName : e.target.value})}/>
            </div>

            <div className='m-2'>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className='form-control' value={employee?.lastName} name="lastName" id="lastName" onChange={(e : any) => setEmployee({...employee, lastName : e.target.value})}/>
            </div>

            <div className='m-2'>
                <label htmlFor="email">Email</label>
                <input type="text" className='form-control' value={employee?.emailId} name="email" id="email" onChange={(e : any) => setEmployee({...employee, emailId : e.target.value})}/>
            </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.heading == 'Add' ? submitEmployee() : updateEmployee(props.employee?.id)}>{props.heading == 'Add' ? 'Submit' : 'Update'}</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EmployeeModal