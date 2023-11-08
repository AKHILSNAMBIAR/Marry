let mongoose =require("mongoose")

let Schema=mongoose.Schema;
let chatSchema= new Schema({
    message:String,
    sendId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    reciId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    }
})
let chatmodel = mongoose.model("Chat",chatSchema)
module.exports=chatmodel