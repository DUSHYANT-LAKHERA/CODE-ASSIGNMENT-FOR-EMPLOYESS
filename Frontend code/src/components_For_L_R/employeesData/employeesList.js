import axios from 'axios';
import React, { useEffect, useState } from 'react'

const EmployeesList = () => {


    const [employeeData, setEmployeeData] = useState("")
    const [employeeShow, setEmployeeShow] = useState(false)
    const [employeeId, setEmployeeId] = useState("")
    const [employeeDob, setEmployeeDob] = useState("")
    const [employeeJoin, setEmployeeJoin] = useState("")
    const [employeeDepartment, setEmployeeDepartment] = useState("")
    const [employeeDesignation, setEmployeeDesignation] = useState("")
    const [employeeSalary, setEmployeeSalary] = useState("")
    const [employeeFName, setEmployeeFName] = useState("")
    const [employeeLname, setEmployeeLname] = useState("")
    // const [employee, setEmployee] = useState()



    useEffect(() => {
        // const login = () => {
        axios.get("http://localhost:2000/api/getAllEmployees")
            .then(res => {
                // console.log(res.data," http://localhost:2000/api/getAllEmployees")
                setEmployeeData(res.data)
                // setLoginUser(res.data.user)

            })
        // }
    }, []);


    const handleAddEmployee = () => {

        setEmployeeShow(true)
        let employeeData = ({
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
            axios.post("http://localhost:2000/api/CreateNewEmployee", employeeData)
                .then(res => {
                    alert(res.data.message)
        setEmployeeShow(false)

                })
        } else {
            if(employeeShow===false){
                
            }else{
                alert("Please Fill All Data of Employee")

            }
        }
    }

    const handleDelete = (id) => {
        console.log(id)
        axios.delete(`http://localhost:2000/api/deleteEmployee/${id}`)
            .then(res => {
                console.log("donwe")
                // setEmployeeDelete(res,"dlelelelelel")

            })
    }
    const handleEdit = () => {

    }
    const handleView = () => {

    }

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
    return (
        <div>

            <button onClick={handleAddEmployee}>Add new Employees</button>
            {employeeShow === true ?
                (<>
                    <div><input type="text" name="emId" value={employeeId} onChange={handleInput}></input></div>
                    <div><input type="date" name="dob" value={employeeDob} onChange={handleInput}></input></div>
                    <div><input type="date" name="joinDate" value={employeeJoin} onChange={handleInput}></input></div>
                    <div><input type="text" name="department" value={employeeDepartment} onChange={handleInput}></input></div>
                    <div><input type="text" name="designation" value={employeeDesignation} onChange={handleInput}></input></div>
                    <div><input type="number" name="salary" value={employeeSalary} onChange={handleInput}></input></div>
                    <div><input type="text" name="firstname" value={employeeFName} onChange={handleInput}></input></div>
                    <div><input type="text" name="lastname" value={employeeLname} onChange={handleInput}></input></div>
                </>
                ) :
                ("")
            }

            {employeeData?.length > 0 && employeeData?.map((item, key) => {
                return (<div>
                    {item.employee_id} __
                    {item.employee_Date_of_birth}__
                    {item.employee_Date_of_joining}__
                    {item.employee_Department_name}__
                    {item.employee_Designation}__
                    {item.employee_Salary}__
                    {item.employee_first_name}__
                    {item.employee_last_name}__
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                    <button onClick={() => handleEdit(item._id)}>edit</button>
                    <button onClick={() => handleView(item._id)}>view</button>
                </div>
                )
            })}

            employeesList</div>
    )
}

export default EmployeesList