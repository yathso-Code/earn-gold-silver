function validateRegister({ name, email, mobile_number, gender, password }) {
  let errors = {};
  if (!name || name.trim() === "") errors.name = "Name is required";
  if (!email || !email.includes("@")) errors.email = "Valid email is required";
  if (!mobile_number || mobile_number.length < 10) errors.mobile_number = "Valid mobile number is required";
  if (!gender || !["male", "female", "other"].includes(gender.toLowerCase())) errors.gender = "Gender must be male/female/other";
  if (!password || password.length < 6) errors.password = "Password must be at least 6 characters";

  return { errors, valid: Object.keys(errors).length < 1 };
}

function validateLogin({ identifier, password }) {
  let errors = {};
  if (!identifier) errors.identifier = "Email or mobile is required";
  if (!password) errors.password = "Password is required";

  return { errors, valid: Object.keys(errors).length < 1 };
}

module.exports = { validateRegister, validateLogin };
