const express = require('express');
const { EmployeeLogin, EmployeeRegister, CreateEmployee, getAllEmployeesData, getSingleEmployeeData, updateById, deleteEmployeeById, SortByJoingDate, SortByDepartment,SortByDesignation } = require('../controllers/loginandregisterUser');
const router = express.Router();

router.post("/login", EmployeeLogin) // login employee

router.post("/register", EmployeeRegister)// EmployeeRegister employee

router.post("/CreateNewEmployee", CreateEmployee)   // login employee

router.get("/getAllEmployees", getAllEmployeesData)// getAllEmployeesData employee

router.get("/getSingleEmployee/:id", getSingleEmployeeData)// getSingleEmployeeData employee

router.patch("/updateEmployee/:id", updateById) //updateById Employee

router.delete("/deleteEmployee/:id", deleteEmployeeById)// deleteEmployeeById employee

router.delete("/deleteEmployee/:id", deleteEmployeeById)// deleteEmployeeById employee

router.get("/joiningdateofemployee/:employee_Date_of_joining", SortByJoingDate)//  joining  date of employee

router.get("/SortByDepartment/:employee_Department_name", SortByDepartment)//  joining  date of employee

router.get("/SortByDesignation/:employee_Designation", SortByDesignation)//  joining  date of employee

module.exports = router;