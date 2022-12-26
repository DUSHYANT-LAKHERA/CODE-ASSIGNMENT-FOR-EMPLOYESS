const express=require('express');
const {UserLogin,UserRegister,CreateEmployee,getAllEmployeesData,getSingleEmployeeData, insertUser,getUserById ,updateById,deleteById,searchUser} = require('../controllers/loginandregisterUser');
const router=express.Router();

router.post("/login",UserLogin)

router.post("/register",UserRegister)

router.post("/CreateNewEmployee",CreateEmployee)   

router.get("/getAllEmployees",getAllEmployeesData)

router.get("/getSingleEmployee/:id",getSingleEmployeeData)


module.exports=router;