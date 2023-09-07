
const mongoose  = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

const SignupinSchema = new mongoose.Schema({
 
  firstname: {
    type:String,
    trim:true, 

  },
  lastname: {
    type:String,
    true:true,
  },
  username:{
    type: String,
    trim: true,
    unique:true,
  },
  email: {
    type:String,
    unique:true 

  },
  section: {
    type:String,
    trim: true,
  },
  phone: {
    type:String,
    trim:true,

  },
  password:{
    type: String,
    trim: true,
  }
 

});
  SignupinSchema.plugin(passportLocalMongoose,{usernameField:"email"}); //
  module.exports = mongoose.model('Signupin',SignupinSchema);