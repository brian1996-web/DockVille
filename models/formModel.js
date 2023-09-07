const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({

  fullname: {
    type:String,
    required:true,
    trim:true, 

  },
  numberplate: {
    type:String,
    true:true,
  },
  carColor: {
    type:String,
    unique:true 

  },
  arrivaltime: {
    type:String,
    trim:true,

  },
  Car:{
    type:String,
    trim:true,
  },
  time: {
    type:String,
    trim:true,

  },
  phone:{
    type: String,
    trim: true,

  },
  nin:{
    type: String,
    trim: true,

  },
  role:{
    type:String,
    trim:true,
  }
  
});
module.exports = mongoose.model("Form",FormSchema);
