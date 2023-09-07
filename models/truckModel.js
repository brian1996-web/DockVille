const mongoose  = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

const TruckSchema = new mongoose.Schema({
 
 
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
  }
  ,phone:{
    type: String,
    trim: true,
  },
  arrivalTime:{
    type: String,
    trim: true,
  },
  Nplate:{
    type: String,
    trim: true,
  },
  color:{
    type: String,
    trim: true,
  },
  model:{
    type: String,
    trim: true,
  },
  gender:{
    type: String,
    trim: true,
  },
  exitTime:{
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
  TruckSchema.plugin(passportLocalMongoose,{usernameField:"email"}); //
  module.exports = mongoose.model('Truck',TruckSchema);