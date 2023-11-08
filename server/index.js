let mongoose = require("mongoose");
let express = require("express");
let cors = require("cors");
let app = express();
const bodyParser = require("body-parser");
const user = require("./models/Marry");
const chat = require("./models/Chat");
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1/Matrimony");
mongoose.connection
.once("open", () => {
    console.log("Connected");
})
.on("error", () => {
    console.log("error");
});
app.post("/register", (req, res) => {
  console.log(req.body);
  console.log("success");
  user
    .create(req.body)
    .then(() => {
      console.log("Success");
      res.json(req.body);
    })
    .catch(() => {
      console.log("error");
    });
  // console.log("hiii")
});
app.post("/login",(req,res)=>{
  user.findOne({name:req.body.name})
  .then((userdata)=>{
      if(userdata){
          if(req.body.pass === userdata.pass){
              res.json({isThere:"success",userdata})
              
          }else{
              res.json("password is incorrect")
          }
      }else{res.json("user not registered")}
  })
  .catch(()=>{
      console.log("error3");
  })
})
app.get("/edit/:id",(req,res)=>{
  user.findOne({_id:req.params.id})
  .then((user)=>{res.json(user)})
})
app.put("/edit/:id",(req,res)=>{
  console.log(req.body);
  user.updateOne({_id:req.params.id},{$set:{name:req.body.name,age:req.body.age,gen:req.body.gen,rel:req.body.rel,pro:req.body.pro,loc:req.body.loc,inte:req.body.inte,abo:req.body.abo,pass:req.body.pass}})
  .then(()=>{
    res.json("successfully updated")
  }
  )
})
app.post("/edit/:id",(req,res)=>{
  console.log(req.body)

})
app.get("/home/:abc",(req,res)=>{
  user.findOne({_id:req.params.abc})
  .then((userData)=>{
    res.json(userData)
  })
  // console.log(req.params.abc)
})
app.delete("/home/:id",(req,res)=>{
  user.deleteOne({_id:req.params.id})
  .then(()=>{res.json("delete")})
})
app.get("/main",(req,res)=>{
  user.find()
  .then((zdata)=>{
    res.json(zdata)
  })
})
app.get("/profile/:id", (req, res) => {
  user.findOne({ _id: req.params.id })
    .then((gdata) => {
      if (gdata) {
        const opp = gdata.gen === "male" ? "female" : "male";
        user.find({ gen: opp, _id: { $ne: gdata._id } })
          .then((filtered) => {
            res.json(filtered);
          })
          .catch(() => {
            console.log("Error");
            
          });
      } else {
        console.log( "User not found" );
      }
    })
    .catch(() => {
      console.log("Error");
    });
});
app.get("/chat/:abc",(req,res)=>{
  user.findOne({_id:req.params.abc})
  .then((userData)=>{
    res.json(userData)
  })
})
app.get("/pro/:id", (req, res) => {
  const userId = req.params.id;

  user.find({ _id: userId })
    .then((qdata) => {
      if (qdata) {
        user.find({ _id: { $e: qdata._id } })
          .then((filtered) => {
            res.json(filtered);
          })
          .catch(() => {
            console.log("Error");
            
          });
      } else {
        console.log( "User not found" );
      }
    })
    .catch(() => {
      res.status(500).json({ message: "Internal server error" });
    });
});

app.listen(5000, () => {
  console.log("server running at 5000");
});