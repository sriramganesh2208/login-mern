const mongoose =require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/employee")
.then(()=>{
    console.log("connected")
})
.catch(()=>{
    console.log("not connected")
})


const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const EmployeeModel = mongoose.model("employees",EmployeeSchema)

module.exports = EmployeeModel