const Validate = (event) => {
  let error = 0;

  // picking input fields with their names
  let username = document.signupform.username;
  let date = document.signupform.date
  let nin = document.signupform.nin
  let receipt = document.signupform.receipt
  let email = document.signupform.email
  let phone = document.signupform.phone
  let arrivalTime = document.signupform.arrivalTime
  let Nplate = document.signupform.Nplate
  let color = document.signupform.color 
  let model = document.signupform.model
  let gender = document.signupform.gender
  let exitTime = document.signupform.exitTime
  let revenue = document.signupform.revenue
  let password = document.signupform.password

  // let revenue = document.signup.revenue



  let errorUsername = document.getElementById("UsernameError");
  let errorDate = document.getElementById("dateError");
  let ninError = document.getElementById("ninError");
  let receiptError = document.getElementById("receiptError");
  let emailError = document.getElementById("emailError");
  let phoneError = document.getElementById("phoneError");
  let arrivalTimeError = document.getElementById("arrivalTimeError");
  let NplateError = document.getElementById("NplateError")
  let colorError = document.getElementById("colorError")
  let modelError = document.getElementById("modelError")
  let genderError = document.getElementById("genderError")
  let exitTimeError = document.getElementById("exitTimeError")
  let revenueError = document.getElementById("revenueError")
  let passwordError = document.getElementById("passwordError");

  // let revenueError = document.getElementById("revenueError")


  if (username.value == "") {
    username.style.border = "1px solid red";
    errorUsername.textContent = "Driver name is required";
    errorUsername.style =
      " color: red; font-size:11px; font-family:helvetica,Arial,sans-serif; ";

    username.focus();
    error++;
  } else if (username.value.length < 2) {
    username.style.border = "3px solid red";
    errorUsername.textContent = "must be greater than 2";
    errorUsername.style = "color: red font-size:11px";
    username.focus();
    error++;
  } else if (username.value.length > 15) {
    username.style.border = "3px solid red";
    errorUsername.textContent =
      "Driver name must not be greater than 15 characters";
    errorUsername.style = "color: red font-size:11px";
    username.focus();
    error++;
  } else {
    username.style.border = "3px solid green";
    errorUsername.textContent = "";
    date.focus();
  }
  if (date.value == "") {
    date.style.border = "1px solid red";
    dateError.textContent = "Date is required";
    dateError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif; ";
    date.focus();
    error++;
  }else {
        date.style.border = "3px solid green";
        dateError.textContent = "";
        nin.focus();
      }
      // // //   // Validating for NIN

      const ninRegex = /^CF([a-zA-Z0-9]{12})+$/;
      const ninRegex2 = /^CM([a-zA-Z0-9]{12})+$/;
    
      if (nin.value == "") {
        nin.style.border = "1px solid red";
        ninError.textContent = "NIN is required";
        ninError.style =
          "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        // nin.focus();
        // return false;
        error++;
      } else if (!(ninRegex.test(nin.value) || ninRegex2.test(nin.value))) {
        nin.style.border = "1px solid red";
        ninError.textContent = "NIN should look like CFXXXXXXX or CMXXXXXXX";
        ninError.style =
          "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        nin.focus();
        // return false;
        error++;
      } else {
        nin.style.border = "1px solid green";
        ninError.textContent = "";
        receipt.focus();
      }
      if (receipt.value == "") {
        receipt.style.border = "1px solid red";
        receiptError.textContent = "Receipt Number is required";
        receiptError.style =
          "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif; ";
        receipt.focus();
        error++;
      }else {
            receipt.style.border = "3px solid green";
            receiptError.textContent = "";
            email.focus();
          }

// validation for Email
  if (email.value == "") {
    email.style.border = "1px solid red";
    emailError.textContent = "Email is required";
    emailError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    email.focus();
    error++;
  }
  // let emailRegex =
  //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.match(emailRegex)) {
    email.style.border = "1px solid red";
    emailError.textContent = "The email address should be valid";
    emailError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    email.focus();
    error++;
  } else {
    email.style.border = "3px solid green";
    emailError.textContent = "";
    phone.focus();
  } 
  //   // Validating Phone number.
  const phoneRegex = /^\+256\d{9}$/;

  if (phone.value == "") {
    phone.style.border = "1px solid red";
    phoneError.textContent = "Phone number is required";
    phoneError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    phone.focus();
    error++;
  } else if (!phoneRegex.test(phone.value)) {
    phone.style.border = "1px solid red";
    phoneError.textContent = "Phone number should start with +256";
    phoneError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    phone.focus();
    error++;
  } else {
    phone.style.border = "3px solid green";
    phoneError.textContent = "";
    // password.focus();
  }
  //   // validation of time.
  if (arrivalTime.value == "") {
    arrivalTime.style.border = "1px solid red";
    arrivalTimeError.textContent = "Arrival Time is required";
    arrivalTimeError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif; ";
    arrivalTime.focus();
    error++;
  }else {
        arrivalTime.style.border = "3px solid green";
        arrivalTimeError.textContent = "";
        Nplate.focus();
      }
     

  // const NPlateRegex = /^U[A-Z]{2}\d{3}[A-Z]$;
  let NplateRegex = /^U[A-Za-z0-9]{1,5}$/;

  if (Nplate.value == "") {
    Nplate.style.border = "1px solid red";
    NplateError.textContent = "car number plate is required";
    NplateError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    Nplate.focus();
    error++;
  }

  else if (!Nplate.value.match(NplateRegex)) {
    Nplate.style.border = "1px solid red";
    NplateError.textContent = "Number plate should be valid.";
    NplateError.style = "color: red; fontsize:11px; font-size:";
    Nplate.focus();
    error++
  } else {
    Nplate.style.border = "3px solid green";
    NplateError.textContent = "";
    color.focus();
  }
        if (color.value == "") {
          color.style.border = "1px solid red";
          colorError.textContent = "The color of the motor is required";
          colorError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;    ";
          // fontsize:11px; fontfamily:sanserif;"
          color.focus();
          error++;
    } else {
       color.style.border = "3px solid green";
       colorError.textContent = "";
      model.focus();
      }

          if (model.value == "") {
            model.style.border = "1px solid red";
            modelError.textContent = "Car model plate is required";
            modelError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;    ";
            // fontsize:11px; fontfamily:sanserif;"
            model.focus();
            error++;
      } else {
         model.style.border = "3px solid green";
         modelError.textContent = "";
        gender.focus();
          }
          if (gender.value == "") {
            gender.style.border = "1px solid red";
            genderError.textContent = "choose male or female";
            genderError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;    ";
            // fontsize:11px; fontfamily:sanserif;"
            gender.focus();
            error++;
      } else {
         gender.style.border = "3px solid green";
         genderError.textContent = "";
        exitTime.focus();
          } if (exitTime.value == "") {
            exitTime.style.border = "1px solid red";
            exitTimeError.textContent = "Exit time is required";
            exitTimeError.style =
              "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif; ";
            exitTime.focus();
            error++;
          }else {
                exitTime.style.border = "3px solid green";
                exitTime.textContent = "";
                revenue.focus();
              }
     
      if (revenue.value == "") {
            revenue.style.border = "1px solid red";
            revenueError.textContent = "Revenue charged is required";
            revenueError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;    ";
            // fontsize:11px; fontfamily:sanserif;"
            revenue.focus();
            error++;
      } else {
         revenue.style.border = "3px solid green";
         revenueError.textContent = "";
        password.focus();
          }
          if (password.value == "") {
            passwordError.style.border = "2px solid red";
            passwordError.textContent = "password is required";
            passwordError.style =
              " color: red; font-size:11px; font-family:helvetica,Arial,sans-serif";
        
            password.focus();
            error++;
          } else if (password.value.length > 15) {
            passwordError.style.border = "2px solid red";
            passwordError.textContent =
              "password must not be greater than 15 characters";
            passwordError.style =
              "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif";
            passwordError.focus();
            error++;
          }

  if (error > 0) {
    event.preventDefault();
  }
};