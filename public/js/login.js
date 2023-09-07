const Validate = (event) => {
  let error = 0;

  // let fullName = document.signupform.fullName;
  let email = document.signupform.email;
  let password = document.signupform.password;

  // let errorfullName = document.getElementById("FnameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("password-error");

  // if (fullName.value == "") {
  //   fullName.style.border = "1px solid red";
  //   errorfullName.textContent = "full  name is required";
  //   errorfullName.style =
  //     "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
  //   // fontsize:11px; fontfamily:sanserif;"
  //   fullName.focus();
  //   error++;
  // } else if (fullName.value.length < 4) {
  //   fullName.style.border = "3px solid red";
  //   errorfullName.textContent = "must be greater than 4";
  //   errorfullName.style =
  //     "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
  //   // fontsize:11px; fontfamily:sanserif;"
  //   fullName.focus();
  //   error++;
  // } else if (fullName.value.length > 15) {
  //   fullName.style.border = "3px solid red";
  //   errorfullName.textContent =
  //     "first  name must not be greater than 15 charactersd";
  //   errorfullName.style = "color: red font-size:11px";
  //   // fontsize:11px; fontfamily:sanserif;"
  //   fullName.focus();
  //   error++;
  // } else {
  //   fullName.style.border = "3px solid green";
  //   errorfullName.textContent = "";
  //   email.focus();
  // }

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
