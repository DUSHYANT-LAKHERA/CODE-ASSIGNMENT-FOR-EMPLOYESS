const User = require("../modals/User");
const Employees = require("../modals/EmployesData");

//Adding New User

exports.UserLogin = async (req, res) => {
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



// //GET ALL DATA
exports.UserRegister = async (req, res) => {
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
        console.log(user)
        user.save(err => {
          if (err) {
            res.send(err)
            console.log("Error")
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

exports.CreateEmployee = (req, res) => {
  console.log(req.body,"datyatataaudgsyfsdifugsdiufh")
  try {
    const { employee_id, employee_first_name, employee_last_name } = req.body

    Employees.findOne({ employee_id: employee_id }, (err, employee) => {
      console.log(employee)
      if (employee) {
        res.send({ message: "This Employee is already Registered", Employee_Data: req.body, })
      } else {
        const employee = new Employees({
          employee_id,
          employee_first_name,
          employee_last_name
        })
        console.log(employee ,"employee Data ")
        employee.save(err => {
          console.log(res.body)
          if (err) {
            res.send(err)
            console.log("Error")
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


exports.getAllEmployeesData = async (req, res) => {
  console.log(res.body)
  try {
    const userdata = await Employees.find();
    console.log(userdata)
    res.status(201).json(userdata);
    console.log("hhhhhh")
    console.log(userdata);
  } catch (error) {
    res.status(422).json(error);
    console.log("sssssss")
  }
};


exports.getSingleEmployeeData = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(req.params);
    const individualdata = await Employees.findById({ _id: id });
    res.json(individualdata);
    console.log(individualdata);
  } catch (error) {
    res.status(422).json(error);
  }
};

// public async createMainCategory(catData: any) {
//   console.log(catData);
//   try {
//     const data: any = await MainCategory.create(catData);
//     console.log('sdfsfgs');
//     return data;
//   } catch (error) {
//     return { data: [], message: error }
//   }
// }


// //GET individual user



// //update user data
// exports.updateById = async (req, res) => {
//   const user = req.body; //put api se dataObj
//   const editUser = new User(user); //chck model valid obj
//   try {
//     await User.updateOne({ _id: req.params.id }, editUser);
//     res.json(editUser);
//   } catch (error) {
//     res.status(422).json(error);
//   }
// };

// exports.deleteById = async (req, res) => {
//   const { id } = req.params;
//   console.log(req.params);
//   try {
//     const deleteuser = await User.deleteOne({ _id: id });
//     res.json(deleteuser);
//   } catch (error) {
//     res.status(422).json(error);
//   }
// };

// exports.searchUser = async (req, res) => {
//   console.log(req.params.key);

//   const data = await User.find({
//     $or: [{ name: { $regex: req.params.key } }],
//   });
//   res.send(data);
// };
