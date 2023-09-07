const Validate = (event) => {
  let error = 0;

  // picking input fields with their names
  let time = document.signupform.time;
  let fullName = document.signupform.fullname;
  let Nplate = document.signupform.Nplate;
  let carColor = document.signupform.carcolor;
  let arrivalTime = document.signupform.arrivalTime;
  let phone = document.signupform.phone;
  // let truck = document.signupform.truck;
  // let email = document.signupform.email;
  // let car = document.signupform.car;
  // let role = document.signupform.role;
  let nin = document.signupform.nin;
  let exitTime = document.signupform.exitTime;
  // let password = document.signupform.password;
  // let confirmPassword = document.signupform.confirmPassword;
  // picking error fields
  
  let timeError = document.getElementById("timeError");
  let errorfullName = document.getElementById("FnameError");
  let NplateError = document.getElementById("Nplate-Error");
  let carColorError = document.getElementById("carColorError");
  let arrivalTimeError = document.getElementById("arrivalTimeError");
  let truckError = document.getElementById("truckError");
  let phoneError = document.getElementById("phoneError");
  // let emailError = document.getElementById("emailError");
  // let carTypeError = document.getElementById("carTypeError");
  // let roleError = document.getElementById("roleError");
  let ninError = document.getElementById("nin-error");
  let exitTimeError = document.getElementById("exitTimeError");
  // let passwordError = document.getElementById("password-error");
  // let confirmPasswordError = document.getElementById("confirmPassword-error");

  // validating first name input
  // validating for emptiness

  if (time.value == "") {
    time.style.border = "1px solid red";
    timeError.textContent = "Date is required";
    timeError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    time.focus();
    error++;
  } else {
    time.style.border = "3px solid green";
    timeError.textContent = "";
    fullName.focus();
  }
  if (fullName.value == "") {
    fullName.style.border = "1px solid red";
    errorfullName.textContent = "full  name is required";
    errorfullName.style =
      " color: red; font-size:11px; font-family:helvetica,Arial,sans-serif; ";

    fullName.focus();
    error++;
  } else if (fullName.value.length < 2) {
    fullName.style.border = "3px solid red";
    errorfullName.textContent = "must be greater than 2";
    errorfullName.style = "color: red font-size:11px";
    fullName.focus();
    error++;
  } else if (fullName.value.length > 25) {
    fullName.style.border = "3px solid red";
    errorfullName.textContent =
      "first  name must not be greater than 15 charactersd";
    errorfullName.style = "color: red font-size:11px";
    fullName.focus();
    error++;
  } else {
    fullName.style.border = "3px solid green";
    errorfullName.textContent = "";
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
  } else if (!Nplate.value.match(NplateRegex)) {
    Nplate.style.border = "1px solid red";
    NplateError.textContent = "Number plate should be valid.";
    NplateError.style = "color: red; fontsize:11px; font-size:";
    Nplate.focus();
    error++;
  } else {
    Nplate.style.border = "3px solid green";
    NplateError.textContent = "";
    carColor.focus();
  }
  if (carColor.value == "") {
    carColor.style.border = "1px solid red";
    carColorError.textContent = "car color is required";
    carColorError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    carColor.focus();
    error++;
  } else {
    carColor.style.border = "3px solid green";
    carColorError.textContent = "";
    arrivalTime.focus();
  }
  if (arrivalTime.value == "") {
    arrivalTime.style.border = "1px solid red";
    arrivalTimeError.textContent = "Arrival time  is required";
    arrivalTimeError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    arrivalTime.focus();
    error++;
  } else {
    arrivalTime.style.border = "3px solid green";
    arrivalTimeError.textContent = "";
    phone.focus();
  }
  // if (truck.value == "") {
  //   truck.style.border = "1px solid red";
  //   truckError.textContent = "Arrival time  is required";
  //   truckError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
  //   truck.focus();
  //   error++;
  // } else {
  //   truck.style.border = "3px solid green";
  //   email.focus();
  // }

  //  // Validating Phone number.
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
    nin.focus();
  }
  // if (role.value == "") {
  //  role.style.border = "1px solid red";
  //   roleError.textContent = "Choose a role";
  //   roleError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
  //   role.focus();
  //   error++;
  // } else {
  //   role.style.border = "3px solid green";
  //   nin.focus();
  // }
  // //   // validation for car type.
  // //   if (car.value == "") {
  // //     car.style.border = "1px solid red";
  // //     carTypeError.textContent = "Select a car type";
  // //     carTypeError.style =
  // //       "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
  // //     car.focus();
  // //    error++;
  // //   } else {
  // //     car.style.border = "3px solid green";
  // //     Nplate.focus();
  // //   }
  // //   if (Nplate.value == "") {
  // //     Nplate.style.border = "3px solid red";
  // //     NplateError.textContent = "first  name is required";
  // //     NplateError.style = "color: red font-size:11px";
  // //     // fontsize:11px; fontfamily:sanserif;"
  // //     Nplate.focus();
  // //     error++;
  // //   } else {
  // //     Nplate.style.border = "3px solid green";
  // //      nin.focus();
  // //   }

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
    exitTime.focus();
  }
  if (exitTime.value == "") {
    exitTime.style.border = "1px solid red";
    exitTimeError.textContent = "exit time model is required";
    exitTimeError.style =
      "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";

    exitTime.focus();
    error++;
  } else {
    exitTime.style.border = "3px solid green";
    exitTimeError.textContent = "";
    // fullName.focus();
  }

  if (error > 0) {
    event.preventDefault();
  }
};
//   if (password.value == "") {
//     passwordError.style.border = "2px solid red";
//     passwordError.textContent = "password is required";
//     passwordError.style = " color: red; font-size:11px; font-family:helvetica,Arial,sans-serif";

//     password.focus();
//     error++;
//   }
//   else if (password.value.length > 15) {
//     passwordError.style.border = "2px solid red";
//     passwordError.textContent =
//       "password must not be greater than 15 characters";
//     passwordError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif";
//     passwordError.focus();
//     error++;
//   } else {
//     passwordError.style.border = "3px solid green";
//     passwordError.textContent = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif";
//     confirmPassword.focus();
//     error++;
//   }
//   if(confirmPassword== ""){
//     confirmPasswordError.style.border = "2px solid red";
//     confirmPasswordError.textContent = "confirm password is required";
//     confirmPasswordError.style = " color: red; font-size:11px; font-family:helvetica,Arial,sans-serif";
//     confirmPassword.focus();
//     error++;

//   }
