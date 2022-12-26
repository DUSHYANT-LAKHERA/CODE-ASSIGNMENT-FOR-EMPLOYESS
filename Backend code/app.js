const express=require('express')
const cors=require('cors')
const app=express()
const curdRoute=require("./routes/routes")


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//open route 
app.get('/',(req,res)=>{
    res.send('This is the backend server of Crudapp website')
})
app.use("/api",curdRoute)


module.exports=app;