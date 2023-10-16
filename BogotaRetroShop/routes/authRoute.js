const express=require('express');
const {createUser, loginUserCtrl, getaUser, getsUser, deletesUser, updatedaUser, blockUser, unblockUser, handleRefreshToken, logout, updatePassword, forgotPasswordToken, resetPassword}=require("../controller/userCtrl");
const router=express.Router();
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware");
router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/password", authMiddleware, updatePassword);
router.post("/login", loginUserCtrl);
router.get("/all-users", getaUser);
router.get("/refresh",handleRefreshToken);
router.get("/logout",logout);
router.get("/:id", authMiddleware, isAdmin, getsUser);
router.delete("/:id", deletesUser);
router.put("/edit-user",authMiddleware, updatedaUser);
router.put("/block-user/:id",authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id",authMiddleware, isAdmin, unblockUser);

module.exports=router;