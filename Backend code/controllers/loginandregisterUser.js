const User = require("../modals/User");
const Employees = require("../modals/EmployesData");

//USER REGISTER

exports.EmployeeRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body

    User.findOne({ email: email }, (err, user) => {
      if (user) {
        res.send({ message: "User already registerd" })
      } else {
        const user = new User({
          name,
          email,
          password
        })
        // console.log(user)
        user.save(err => {
          if (err) {
            res.send(err)
            // console.log("Error")
          } else {
            res.send({
              Data: req.body,
              message: "Yor Are Successfully Registered "
            })
          }
        })
      }
    })

  } catch (error) {
    res.status(422).json(error);
  }
};




// User login 
exports.EmployeeLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404).json("Please fill the Details");
  }
  try {
    User.findOne({ email: email }, (err, user) => {
      if (user) {
        if (password === user.password) {

          res.send({ message: "Login Successfull", user: user })
        } else {
          res.send({ message: "Password not match" })
        }
      } else {
        res.send({ message: "User not Registered" })
      }
    })
  } catch (error) {
    res.status(422).json(error);
  }
};

//POST ADD  NEW EMPLOYEE 
exports.CreateEmployee = (req, res) => {
  // console.log(req.body,"datyatataaudgsyfsdifugsdiufh")
  try {
    const { employee_id, employee_first_name, employee_last_name, employee_Date_of_joining, employee_Date_of_birth, employee_Salary, employee_Designation, employee_Department_name } = req.body

    Employees.findOne({ employee_id: employee_id }, (err, employee) => {
      console.log(employee)
      if (employee) {
        res.send({ message: "This Employee is already Registered Please Add new employee", Employee_Data: req.body, })
      } else {
        const employee = new Employees({
          employee_id,
          employee_first_name,
          employee_last_name,
          employee_Date_of_joining,
          employee_Date_of_birth,
          employee_Salary,
          employee_Designation,
          employee_Department_name
        })
        // console.log(employee ,"employee Data ")
        employee.save(err => {
          // console.log(res.body)
          if (err) {
            res.send(err)
            // console.log("Error")
          } else {
            res.send({
              Data: req.body,
              message: "New Employee is Add "
            })
          }
        })
      }
    })
  } catch (error) {
    res.status(422).json(error);
  }
};

//GET ALL EMPLOYEES
exports.getAllEmployeesData = async (req, res) => {
  // console.log(res.body)
  try {
    const userdata = await Employees.find();
    // console.log(userdata)
    res.status(201).json(userdata);
    // console.log("hhhhhh")
    // console.log(userdata);
  } catch (error) {
    res.status(422).json(error);
    // console.log("sssssss")
  }
};

// GET SINGLE EMPLOYEES
exports.getSingleEmployeeData = async (req, res) => {
  const { id } = req.params;
  try {
    // console.log(req.params);
    const individualdata = await Employees.findById({ _id: id });
    res.json(individualdata);
    // console.log(individualdata);
  } catch (error) {
    res.status(422).json(error);
  }
};

exports.SortByJoingDate = async (req, res) => {
  const { employee_Date_of_joining } = req.params;
  try {
    console.log(req.params);
    const individualdata = await Employees.find({ employee_Date_of_joining: employee_Date_of_joining });
    res.json(individualdata);
    // console.log(individualdata);
  } catch (error) {
    res.status(422).json(error);
  }
};

exports.SortByDepartment = async (req, res) => {
  const { employee_Department_name } = req.params;
  try {
    console.log(req.params);
    const individualdata = await Employees.find({ employee_Department_name: employee_Department_name });
    res.json(individualdata);
    // console.log(individualdata);
  } catch (error) {
    res.status(422).json(error);
  }
};

exports.SortByDesignation = async (req, res) => {
  const { employee_Designation } = req.params;
  try {
    console.log(req.params);
    const individualdata = await Employees.find({ employee_Designation: employee_Designation });
    res.json(individualdata);
    // console.log(individualdata);
  } catch (error) {
    res.status(422).json(error);
  }
};


// exports.SortByJoingDate = async (req, res) => {
//   console.log(req, res, "ssssssssssssssssssssssssss")
//   const { employee_Date_of_joining } = req.body;
//   try {
//     const individualdata = await Employees.find({ employee_Date_of_joining: employee_Date_of_joining })
//     console.log(individualdata, "k")
//     res.json(individualdata);

//   } catch (error) {
//     res.status(422).json(error);
//   }
// };


exports.updateById = async (req, res) => {
  try {
    const query = {};
    for (i in req.body) {
      if (req.body[i]) {
        query[i] = req.body[i]
      }
    }
    const data = await Employees.updateOne({ _id: req.params.id }, { $set: query })
    console.log(data, "data updateeeeeee")

    res.json({ message: 'Post Updated !!', data: data })
  } catch (error) {
    throw new Error(error)
  }
  // var employee = req.body; //put api se dataObj
  // var editEmployee = new Employees(employee); //chck model valid obj
  // try {   
  //   console.log("144 try")
  //   var data = await Employees.updateOne( {_id:req.params.id} , {$set:editEmployee} ,{new: true});
  //   res.json(data);
  //   console.log(editEmployee, "aaaaaaa")
  //   console.log(data, "data updateeeeeee")
  // } catch (error) {
  //   console.log("150catch")
  //   res.status(422).json(error);
  // }
};

exports.deleteEmployeeById = async (req, res) => {
  const { id } = req.params;
  // console.log(id,"id")
  // console.log(req.params);
  try {
    const deleteEmployee = await Employees.deleteOne({ _id: id });
    res.json(deleteEmployee);
    // console.log(deleteEmployee)
  } catch (error) {
    res.status(422).json(error);
  }
};

