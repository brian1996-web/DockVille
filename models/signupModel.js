const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({

  firstname: {
    type:String,
    trim:true, 

  },
  lastname: {
    type:String,
    true:true,
  },
  email: {
    type:String,
    unique:true 

  },
  phone: {
    type:String,
    trim:true,

  },
  mypassword:{
    type: String,
    trim: true,

  },
  gender:{
    type: String,
    trim: true,

  },

});
module.exports = mongoose.model("Signup",SignupSchema);
