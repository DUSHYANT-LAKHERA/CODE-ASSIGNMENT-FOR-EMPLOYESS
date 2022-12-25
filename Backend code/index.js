import express from "express"

import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

// const urlformongo= "mongodb+srv://Dushyantmonodb:Dushyant123@cluster0.c8wzxwn.mongodb.net/test"


"DB key"



const User = new mongoose.model("User", userSchema)



//POST API FOR LOGIN
app.post("/login", (req, res) => {
    res.send("Login Api")
})

app.post("/register", (req, res) => {
    res.send("Register API working ")
   
    console.log(req.body)

   
})

app.listen(9002, () => {
    console.log("Backend started at port 9002")
})