// import express from "express"

// import cors from "cors"
// import mongoose from "mongoose"

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded())
// app.use(cors())

// mongoose.connect('mongodb+srv://Dushyantmonodb:Dushyant123@cluster0.c8wzxwn.mongodb.net/projectforemployees', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }, () => {
//     console.log("DB connected")
// });

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,

// })


// const User = new mongoose.model("User", userSchema)




// //POST API FOR LOGIN
// app.post("/login", (req, res) => {
//     const { email, password } = req.body
//     User.findOne({ email: email }, (err, user) => {
//         if (user) {
//             if (password === user.password) {

//                 res.send({ message: "Login Successfull", user: user })
//             } else {
//                 res.send({ message: "Password not match" })
//             }
//         } else {
//             res.send({ message: "User not Registered" })
//         }
//     })
// })

// app.post("/register", (req, res) => {
//     // res.send("Register API working ")
//     const { name, email, password } = req.body
//     User.findOne({ email: email }, (err, user) => {
//         if (user) {
//             res.send({ message: "User already registerd" })
//         } else {
//             const user = new User({
//                 name,
//                 email,
//                 password
//             })
            // console.log(user)
//             user.save(err => {
//                 if (err) {
//                     res.send(err)
//                     console.log("Error")

//                 } else {
//                     res.send({
//                         Data: req.body,
//                         message: "Yor Are Successfully Registered "
//                     })
//                 }
//             })
//         }
//     })
//     // console.log(req.body)
// })





// const employeeSchema = new mongoose.Schema({

//         employee_id: String,
//         employee_first_name: String,
//         employee_last_name: String,
//         employee_Date_of_joining: String,
//         employee_Date_of_birth: String,
//         employee_Salary: String,
//         employee_Designation: String,
//         employee_Department_name: String,
    
// })

// const employeesData = new mongoose.model("employeesData", employeeSchema)


// app.post("/newEmployees", (req, res) => {
//     res.send("Employees API working ")
//     // employeesData
//     console.log(req, "newEmployees")

//     const user = new employeesData({
//         employee_id,
//         employee_first_name,
//         employee_last_name
//     })
//     console.log(user)
//     user.save(err => {
//         if (err) {
//             res.send(err)
//             console.log("Error")

//         } else {
//             res.send({
//                 Data: req.body,
//                 message: "new employee added Successfully "
//             })
//             console.log(Data,"new employee added")
//         }
//     })
// })



// // app.get("/getAllEmployees", (req, res) => {
// //     res.send("getAllEmployeesEmployees API working ")
// //     console.log(req.body,"getAllEmployees")
// // })

// // app.get("/getSingleEmployees", (req, res) => {
// //     res.send("getSingleEmployees API working ")
// //     console.log(req.body,"getSingleEmployees")
// // })

// // app.patch("/editSingleEmployees", (req, res) => {
// //     res.send("editSingleEmployees API working ")
// //     console.log(req.body,"editSingleEmployees")
// // })

// // app.delete("/deleteSingleEmployees", (req, res) => {
// //     res.send("deleteSingleEmployees API working ")
// //     console.log(req.body,"deleteSingleEmployees")
// // })


// app.listen(9002, () => {
//     console.log("Backend started at port 9002")
// })