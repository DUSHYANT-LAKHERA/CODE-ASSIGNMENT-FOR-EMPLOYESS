const express=require('express');
const {EmployeeLogin,EmployeeRegister,CreateEmployee,getAllEmployeesData,getSingleEmployeeData,updateById, deleteEmployeeById,insertUser,getUserById ,deleteById,searchUser} = require('../controllers/loginandregisterUser');
const router=express.Router();

router.post("/login",EmployeeLogin) // login employee

router.post("/register",EmployeeRegister)// EmployeeRegister employee

router.post("/CreateNewEmployee",CreateEmployee)   // login employee

router.get("/getAllEmployees",getAllEmployeesData)// getAllEmployeesData employee

router.get("/getSingleEmployee/:id",getSingleEmployeeData)// getSingleEmployeeData employee

router.patch("/updateEmployee/:id",updateById) //updateById Employee

router.delete("/deleteEmployee/:id",deleteEmployeeById)// deleteEmployeeById employee

module.exports=router;