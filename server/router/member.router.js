const verifySignUp = require("./verifySignUp");
const authJwt = require("./verifyJwtToken");
const multer = require("multer");
const path = require("path");

module.exports = (app) => {
  const userController = require("../controller/user.controller");

  app.post("/login", userController.login);

  app.put(
    "/user/edit/password",
    [authJwt.verifyToken, verifySignUp.checkPassword],
    userController.editPassword
  );

  app.post("/forgetpassword", userController.ForgetPassword);

  app.post(
    "/newpassword",
    [verifySignUp.checkPassword],
    userController.NewPassword
  );

  app.post("/token/check", userController.checkToken);
};
