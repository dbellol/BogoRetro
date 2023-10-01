const express=require('express');
const {createUser, loginUserCtrl, getaUser, getsUser, deletesUser, updatedaUser, blockUser, unblockUser}=require("../controller/userCtrl");
const router=express.Router();
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware");
router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getaUser);
router.get("/:id", authMiddleware, isAdmin, getsUser);
router.delete("/:id", deletesUser);
router.put("/edit-user",authMiddleware, updatedaUser);
router.put("/block-user/:id",authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id",authMiddleware, isAdmin, unblockUser);

module.exports=router;