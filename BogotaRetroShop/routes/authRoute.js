const express=require('express');
const {createUser, loginUserCtrl, getaUser, getsUser, deletesUser, updatedaUser}=require("../controller/userCtrl");
const router=express.Router();
router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getaUser);
router.get("/:id", getsUser);
router.delete("/:id", deletesUser);
router.put("/:id", updatedaUser);

module.exports=router;