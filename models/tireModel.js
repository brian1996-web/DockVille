const mongoose  = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

const TireSchema = new mongoose.Schema({
 
  
  username:{
    type: String,
    trim: true,
  },
   date:{
    type: String,
    trim: true,
  },
  nin:{
    type: String,
    unique: true,
  },
  receipt:{
    type: String,
    unique: true,
  },
  email:{
    type: String,
    unique: true,
  },
  model:{
    type: String,
    trim: true,
  },
  gender:{
    type: String,
    trim: true,
  },
  revenue:{
    type: String,
    trim: true,
  },
  password:{
    type: String,
    trim: true,
  },
  // role: {
  //     type:String,
  //     trim: true,
  //   },
});
  TireSchema.plugin(passportLocalMongoose,{usernameField:"email"}); //
  module.exports = mongoose.model('Tire',TireSchema);