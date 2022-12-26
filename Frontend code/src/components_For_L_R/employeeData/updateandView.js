import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UpdateandView = () => {
    const { id } = useParams();
    console.log(id)




    const [employeeId, setEmployeeId] = useState("")
    const [employeeDob, setEmployeeDob] = useState("")
    const [employeeJoin, setEmployeeJoin] = useState("")
    const [employeeDepartment, setEmployeeDepartment] = useState("")
    const [employeeDesignation, setEmployeeDesignation] = useState("")
    const [employeeSalary, setEmployeeSalary] = useState("")
    const [employeeFName, setEmployeeFName] = useState("")
    const [employeeLname, setEmployeeLname] = useState("")

    useEffect(() => {
        // const login = () => {
        axios.get(`http://localhost:2000/api//getSingleEmployee/${id}`)
            .then(res => {
                console.log(res.data, " hittttttt")
                setEmployeeId(res?.data?.employee_id)
                setEmployeeDob(res?.data?.employee_Date_of_birth)
                setEmployeeJoin(res?.data?.employee_Date_of_joining)
                setEmployeeDepartment(res?.data?.employee_Department_name)
                setEmployeeDesignation(res?.data?.employee_Designation)
                setEmployeeSalary(res?.data?.employee_Salary)
                setEmployeeFName(res?.data?.employee_first_name)
                setEmployeeLname(res?.data?.employee_last_name)

                // setEmployeeData(res.data)
                // setLoginUser(res.data.user)

            })
        // }
    }, []);


    const handleInput = (e) => {
        let inputName = e.target.name
        let inputValue = e.target.value
        switch (inputName) {
            case "firstname":
                setEmployeeFName(inputValue);
                break;
            case "lastname":
                setEmployeeLname(inputValue);
                break;
            case "salary":
                setEmployeeSalary(inputValue)
                break;
            case "designation":
                setEmployeeDesignation(inputValue)
                break;
            case "department":
                setEmployeeDepartment(inputValue)
                break;
            case "joinDate":
                setEmployeeJoin(inputValue)
                break;
            case "dob":
                setEmployeeDob(inputValue)
                break;
            case "emId":
                setEmployeeId(inputValue)
                break;
            default:
                break;
        }
    }

    console.log(employeeId)
    console.log(employeeDob)
    console.log(employeeJoin)
    console.log(employeeDepartment)
    console.log(employeeDesignation)
    console.log(employeeSalary)
    console.log(employeeFName)
    console.log(employeeLname)
    const handleUpdate = () => {
        let updateEmployeeData = ({
            employee_id: employeeId,
            employee_Date_of_birth: employeeDob,
            employee_Date_of_joining: employeeJoin,
            employee_Designation: employeeDepartment,
            employee_Department_name: employeeDesignation,
            employee_Salary: employeeSalary,
            employee_first_name: employeeFName,
            employee_last_name: employeeLname
        })
        // const { name, email, password, reEnterPassword } = user


        if (employeeId && employeeDob && employeeJoin && employeeDepartment && employeeDesignation && employeeSalary
            && employeeFName && employeeLname) {
            axios.patch(`http://localhost:2000/api/updateEmployee/${id}`, updateEmployeeData)
                .then(res => {
                    alert(res.data.message) 

                })
        } else {
            alert("Please Fill All Data of Employee")
        }
    }

    return (
        <div>updateandView

            <div>
                <div><input type="text" name="emId" value={employeeId} onChange={handleInput}></input></div>
                <div><input type="date" name="dob" value={employeeDob} onChange={handleInput}></input></div>
                <div><input type="date" name="joinDate" value={employeeJoin} onChange={handleInput}></input></div>
                <div><input type="text" name="department" value={employeeDepartment} onChange={handleInput}></input></div>
                <div><input type="text" name="designation" value={employeeDesignation} onChange={handleInput}></input></div>
                <div><input type="number" name="salary" value={employeeSalary} onChange={handleInput}></input></div>
                <div><input type="text" name="firstname" value={employeeFName} onChange={handleInput}></input></div>
                <div><input type="text" name="lastname" value={employeeLname} onChange={handleInput}></input></div>

                <button onClick={handleUpdate}>Update Details</button>
            </div>
            {/*  {employeeDataSingle.employee_id}
            {employeeDataSingle.employee_first_name}
            {employeeDataSingle.employee_Date_of_birth}
            {employeeDataSingle.employee_Date_of_joining}
            {employeeDataSingle.employee_Designation}
            {employeeDataSingle.employee_Department_name}
            {employeeDataSingle.employee_Salary}
    {employeeDataSingle.employee_last_name}*/}
        </div>
    )
}

export default UpdateandView