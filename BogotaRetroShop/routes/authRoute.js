const express=require('express');
const {createUser, loginUserCtrl, getaUser, getsUser}=require("../controller/userCtrl");
const router=express.Router();
router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getaUser);
router.get("/:id", getsUser);

module.exports=router;