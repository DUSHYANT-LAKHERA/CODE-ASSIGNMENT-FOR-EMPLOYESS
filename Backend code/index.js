import express from "express"

import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect(process.env.MONGODB_CONECTION_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log("DB connected")
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})


const User = new mongoose.model("User", userSchema)



//POST API FOR LOGIN
app.post("/login", (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {

                res.send({ message: "Login Successfull", user: user })
            } else {
                res.send({ message: "Password not match" })
            }
        }else{
            res.send({message:"User not Registered"})
        }
    })
})

app.post("/register", (req, res) => {
    // res.send("Register API working ")
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
    // console.log(req.body)


})

app.listen(9002, () => {
    console.log("Backend started at port 9002")
})