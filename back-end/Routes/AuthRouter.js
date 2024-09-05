const { signup, login } = require("../Controllers/AuthController");
const { signupValidation, LoginValidation } = require("../Middlewares/AuthValidation");

const router = require("express").Router();


router.post('/login', LoginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;