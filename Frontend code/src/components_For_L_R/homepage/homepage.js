import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { NavLink, useHistory } from 'react-router-dom'
import "./homepage.css"

const Homepage = ({ setLoginUser }) => {

    const history = useHistory()



    const [employeeData, setEmployeeData] = useState("")
    const [employeeDataAll, setEmployeeDataAll] = useState("")
    const [employeeShow, setEmployeeShow] = useState(false)
    const [employeeId, setEmployeeId] = useState("")
    const [employeeDob, setEmployeeDob] = useState("")
    const [employeeJoin, setEmployeeJoin] = useState("")
    const [employeeDepartment, setEmployeeDepartment] = useState("")
    const [employeeDesignation, setEmployeeDesignation] = useState("")
    const [employeeSalary, setEmployeeSalary] = useState("")
    const [employeeFName, setEmployeeFName] = useState("")
    const [employeeLname, setEmployeeLname] = useState("")
    // const [employeeJoinDate, setEmployeeJoinDate] = useState()

    const [searchEmployeeData, setSearchEmployeeData] = useState("")
    // console.log(employeeJoinDate)
    useEffect(() => {
        // const login = () => {
        axios.get("http://localhost:2000/api/getAllEmployees")
            .then(res => {
                // console.log(res.data," http://localhost:2000/api/getAllEmployees")
                setEmployeeData(res.data)
                setEmployeeDataAll(res.data)
                // setLoginUser(res.data.user)

            })
        // }
    }, []);

    const handleCategorySearch = (e) => {
        setSearchEmployeeData(e.target.value)
    }
    const handleAddEmployee = () => {
        history.push("/EmployeesCreate")
    }

    const handleDelete = (id) => {
        console.log(id)
        axios.delete(`http://localhost:2000/api/deleteEmployee/${id}`)
            .then(res => {
                axios.get("http://localhost:2000/api/getAllEmployees")
                .then(res => {
                    // console.log(res.data," http://localhost:2000/api/getAllEmployees")
                    setEmployeeData(res.data)
                    setEmployeeDataAll(res.data)
                    // setLoginUser(res.data.user)
    
                }) 
                console.log("donwe")
            })
    }
   
    const handleView = (id) => {
        history.push(`/EmployeesData/${id}`)
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

    const hanldeDatePicker = (e) => {
        let inputValue = e.target.value
        // let date = {
        //     employee_Date_of_joining: inputValue
        // }
        // console.log(typeof inputValue, "typeeeee")
        // console.log(date)
        axios.get(`http://localhost:2000/api/joiningdateofemployee/${inputValue}`)
            .then(res => {
                console.log(res.data, "joiningdateofemployee ")
                setEmployeeData(res.data)
                // setLoginUser(res.data.user)

            })
    }


    const handleDesignations = (e) => {
        let inputValue = e.target.value
        console.log(inputValue)

        axios.get(`http://localhost:2000/api/SortByDesignation/${inputValue}`)
            .then(res => {
                console.log(res.data, "joiningdateofemployee ")
                setEmployeeData(res.data)
                // setLoginUser(res.data.user)

            })
    }

    const handleDepartment = (e) => {
        let inputValue = e.target.value
        console.log(inputValue)

        axios.get(`http://localhost:2000/api/SortByDepartment/${inputValue}`)
            .then(res => {
                console.log(res.data, "joiningdateofemployee ")
                setEmployeeData(res.data)
                // setLoginUser(res.data.user)

            })
    }

    const handleSalary = (e) => {
        let inputValue = e.target.value
        console.log(inputValue)
    }

    console.log(employeeId)
    console.log(employeeDob)
    console.log(employeeJoin)
    console.log(employeeDepartment)
    console.log(employeeDesignation)
    console.log(employeeSalary)
    console.log(employeeFName)
    console.log(employeeLname)
    var Logout = () => {
        history.push('/login')
    }
    return (
        <div className='divcss' >
            <h1 className='demo'>Welcome To Employees Dashboard</h1>
            <button className='appsearch' onClick={handleAddEmployee}>Add new Employees</button>
            {employeeShow === true ?
                (<div>
                    <div><input type="text" name="emId" value={employeeId} onChange={handleInput}></input></div>
                    <div><input type="date" name="dob" value={employeeDob} onChange={handleInput}></input></div>
                    <div><input type="date" name="joinDate" value={employeeJoin} onChange={handleInput}></input></div>
                    <div><input type="text" name="department" value={employeeDepartment} onChange={handleInput}></input></div>
                    <div><input type="text" name="designation" value={employeeDesignation} onChange={handleInput}></input></div>
                    <div><input type="number" name="salary" value={employeeSalary} onChange={handleInput}></input></div>
                    <div><input type="text" name="firstname" value={employeeFName} onChange={handleInput}></input></div>
                    <div><input type="text" name="lastname" value={employeeLname} onChange={handleInput}></input></div>
                </div>
                ) :
                ("")
            }
            <input

                type="search"
                placeholder="Enter Employee Id ..."
                onChange={handleCategorySearch}
            // onKeyUp={handleSearch}
            />
         { /*  <label for="cars">Salary Range :</label>

            <select name="cars" id="cars" onChange={handleSalary}>
                <option value="volvo">select</option>
                <option value="1,00,000">0 to 1,00,000 lakh</option>
                <option value="2,00,000">1,00,000 to 2,00,000 lakh</option>
                <option value="2,00,000">2,00,000 to 3,00,000 lakh</option>
                <option value="3,00,000">3,00,000 to 4,00,000 lakh</option>
                <option value="4,00,000">4,00,000 to 5,00,000 lakh</option>
                <option value="5,00,000">5,00,000 to 6,00,000 lakh</option>
                <option value="6,00,000">6,00,000 to 7,00,000 lakh</option>
        </select>*/}

            <label for="cars">Department</label>

            <select name="cars" id="cars" onChange={handleDepartment}>
                <option >select</option>

                {employeeDataAll?.length > 0 && employeeDataAll?.map((item, key) => {
                    return (
                        <option value={item.employee_Department_name}>{item.employee_Department_name}</option>)
                })
                }
            </select>
            <label for="cars">Designations</label>

            <select name="cars" id="cars" onChange={handleDesignations}>
                <option >select</option>

                {employeeDataAll?.length > 0 && employeeDataAll?.map((item, key) => {
                    return (
                        <option value={item.employee_Designation}>{item.employee_Designation}</option>)
                })
                }



            </select>
            
            <input type="date"
                onChange={hanldeDatePicker} />

            <div className="App">
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Date_of_joining</th>
                        <th>Date_of_birth</th>
                        <th>Employee ID</th>
                    </tr>
                    {employeeData.length > 0 ? employeeData.filter((item) => {
                        if (searchEmployeeData === "") {
                            return item;
                        } else if (
                            item.employee_id.toLowerCase()
                                .includes(searchEmployeeData.toLowerCase())
                        ) {
                            return item;
                        }
                    }).map((item, key) => {
                        return (
                            <tr key={key}>
                                <td>{item.employee_first_name}</td>
                                <td>{item.employee_last_name}</td>
                                <td>{item.employee_Department_name}</td>
                                <td>{item.employee_Designation}</td>
                                <td>{item.employee_Salary}</td>
                                <td>{item.employee_Date_of_joining}</td>
                                <td>{item.employee_Date_of_birth}</td>
                                <td>{item.employee_id}</td>
                                <button className='appsearch' onClick={() => handleDelete(item._id)}>Delete</button>
                                <button className='appsearch' onClick={() => handleView(item._id)}> Edit/View</button>

                            </tr>

                        )
                    }) : <div>
                    
                    "No Record Found" </div> }

                </table>
            </div>
            <button className='logoutbt' onClick={() => Logout()} >Logout</button>        </div>



    )
}

export default Homepage