const mongoose = require("mongoose");

const LoginPageSchema = new mongoose.Schema({

  // fullname: {
  //   type:String,
  //   required:true,
  //   trim:true, 

  // },
  email: {
    type:String,
    unique:true 

  },
  password:{
    type: String,
    trim: true,

  }

});


module.exports = mongoose.model("LoginPage",LoginPageSchema);
