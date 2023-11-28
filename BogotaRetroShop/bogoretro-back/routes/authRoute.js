const express=require('express');
const {createUser, loginUserCtrl, getaUser, getsUser, deletesUser, updatedaUser, blockUser, unblockUser, handleRefreshToken, logout, updatePassword, forgotPasswordToken, resetPassword, loginAdmin, getWishList, saveAdress, userCar, getUserCar, /*emptyCar, applyCoupon,*/ createOrder, /*getOrders, updateOrders, getAllOrders, getOrderByUserId,*/ removeProductFromCart, updateProductQuantityFromCart}=require("../controller/userCtrl");
const router=express.Router();
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware");
router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
/*router.put("/update-order/:id", authMiddleware, isAdmin, updateOrders);*/


router.put("/password", authMiddleware, updatePassword);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.post("/car", authMiddleware, userCar);
/*router.post("/car/applycoupon", authMiddleware, applyCoupon);*/
router.post("/car/create-order", authMiddleware, createOrder);



router.get("/all-users", getaUser);
/*router.get("/get-orders", authMiddleware, getOrders);
router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
router.put("/getorderbyuser/:id", authMiddleware, isAdmin, getOrderByUserId);*/



router.get("/refresh",handleRefreshToken);
router.get("/logout",logout);
router.get("/wishlist", authMiddleware, getWishList);
router.get("/car", authMiddleware, isAdmin, getUserCar);

router.get("/:id", authMiddleware, getsUser);
/*router.delete("/empty-car", authMiddleware, emptyCar);*/
router.delete("/delete-product-car/:cartItemId", authMiddleware, removeProductFromCart);
router.delete("/update-product-car/:cartItemId/:newQuantity", authMiddleware, updateProductQuantityFromCart);



router.delete("/:id", deletesUser);
router.put("/edit-user",authMiddleware, updatedaUser);
router.put("/save-address",authMiddleware, saveAdress);

router.put("/block-user/:id",authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id",authMiddleware, isAdmin, unblockUser);

module.exports=router;