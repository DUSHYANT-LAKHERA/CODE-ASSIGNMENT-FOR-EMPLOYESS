const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    employee_id: String,
    employee_first_name: String,
    employee_last_name: String,
    employee_Date_of_joining: String,
    employee_Date_of_birth: String,
    employee_Salary: String,
    employee_Designation: String,
    employee_Department_name: String,
})

const Employees = new mongoose.model("employeesdata", employeeSchema)
module.exports = Employees