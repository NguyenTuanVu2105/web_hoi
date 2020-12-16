require("dotenv").config();
const email = process.env.EMAIL_USER;
const password = process.env.EMAIL_PASS;

const configemail = { email, password };

module.exports = configemail;
