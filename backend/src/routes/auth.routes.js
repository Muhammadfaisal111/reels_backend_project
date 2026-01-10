const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
// User Authentication Routes
router.post("/user/register", authController.registerUser);
router.post("/user/login", authController.loginUser);
router.get("/user/logout", authController.logoutUser);
// Food Partner Authentication Routes
router.post("/foodpartner/register", authController.foodPartnerRegister);
router.post("/foodpartner/login", authController.foodPartnerLogin);
router.get("/foodpartner/logout", authController.foodPartnerLogout);

module.exports = router;
