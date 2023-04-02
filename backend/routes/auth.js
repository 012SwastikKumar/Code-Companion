const express = require("express");
const router = express.Router();

const {
    test,
    registerUser,
    loginUser,
    getUserProfile,
} = require("../controllers/authController");

const { isAuthenticatedUser } = require("../middleWares/auth");

router.route('/test').get(test);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(isAuthenticatedUser, getUserProfile);

module.exports = router;
