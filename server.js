const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const passport = require("passport");
// connecting to our port
const connectDB = require("./configdb/dbConfig");
const port = process.env.PORT || 4000;

// calling the configuration to run
const app = express();

//importing the Routes
const Admin = require("./models/adminModel");
const loginPageRoutes = require("./controllers/loginPageRoutes");
const adminRoutes = require("./controllers/adminRoutes");
const dashRoutes = require("./views/dashRoutes");
const signupRoutes = require('./controllers/signupRoutes');
const formRoutes = require('./controllers/formRoutes');
const sectionsRoutes = require('./controllers/sectionsRoutes');
const truckRoutes = require('./controllers/truckRoutes');
const landingRoutes = require('./controllers/landingRoutes');
const tireRoutes = require('./controllers/tireRoutes');


const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false
})
// const session = expressSession({})
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// calling the configuration to run
connectDB();


//setting up pug as our view engine
app.engine("pug",require("pug").__express);
app.set("view engine", "pug");
app.set("views",path.join(__dirname,"views"));

// setting up directory for static files

app.use(expressSession);


app.use(passport.initialize());
app.use(passport.session());


passport.use(Admin.createStrategy());
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api', signupRoutes);
app.use('/api', loginPageRoutes);
app.use('/api', adminRoutes);
app.use('/api', dashRoutes);
app.use('/api', formRoutes);
app.use('/api', sectionsRoutes);
app.use('/api', truckRoutes);
app.use('/api', landingRoutes); 
app.use('/api', tireRoutes);




// app.get("/sections", (req, res) => {
//   res.send("sections.pug");
// });










// app.listen(port, () => console.log(" server is running at http://localhost:"+port));

app.listen(port, () => console.log(" server is running at http://localhost:"+port));
