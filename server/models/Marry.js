let mongoose =require("mongoose")

let Schema=mongoose.Schema;
let employeeSchema= new Schema({
    name:String,
    age:String,
    gen:String,
    rel:String,
    pro:String,
    loc:String,
    inte:String,
    abo:String,
    pass:String,
    message:String,
    reciId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    }
})
let employeemodel = mongoose.model("Users",employeeSchema)
module.exports=employeemodel