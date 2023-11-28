const User = require("../models/userModel");
const Product = require("../models/productModel");
const Car = require("../models/carModel");
const Order = require("../models/orderModel");
const Coupon = require("../models/couponModel");
const uniqid = require("uniqid");
const { generateToken } = require("../config/jwtToken");
const asyncHandler = require("express-async-handler");
const validateMongoId = require("../utils/validateMongodbId");
const { generateRefreshToken } = require("../config/refreshtoken");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("./emailCtrol");
const crypto = require("crypto");
const { json } = require("body-parser");
//Crear usuario
const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    //Crear un nuevo usuario
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("El usuario que desea crear ya existe");
  }
});

//Login a User
const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //Verificar si un usuario existe o no
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findUser?._id);
    const updateuser = await User.findByIdAndUpdate(
      findUser.id,
      {
        refreshToken: refreshToken,
      },
      {
        new: true,
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      wishlist: findUser?.wishlist,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Contraseña o usuario invalido");
  }
});
//Admin login
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //Verificar si un usuario existe o no
  const findAdmin = await User.findOne({ email });
  if (findAdmin.role !== "admin") throw new Error("No está autorizado");
  if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findAdmin?._id);
    const updateuser = await User.findByIdAndUpdate(
      findAdmin.id,
      {
        refreshToken: refreshToken,
      },
      {
        new: true,
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findAdmin?._id,
      firstname: findAdmin?.firstname,
      lastname: findAdmin?.lastname,
      email: findAdmin?.email,
      mobile: findAdmin?.mobile,
      token: generateToken(findAdmin?._id),
    });
  } else {
    throw new Error("Contraseña o usuario invalido");
  }
});
//Handle refresh token
const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken)
    throw new Error("No se recargó el token en las cookies");
  const refreshToken = cookie.refreshToken;
  console.log(refreshToken);
  const user = await User.findOne({ refreshToken });
  if (!user)
    throw new Error(
      "No se recargó el token presente en la base de datos o no hizo match"
    );
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err || user.id !== decoded.id) {
      throw new Error("Hay algo mal con el token refresh");
    }
    const accessToken = generateToken(user?._id);
    res.json({ accessToken });
  });
});
//Logout function
const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken)
    throw new Error("No se recargó el token en las cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204); //forbidden
  }
  await User.findOneAndUpdate(refreshToken, {
    refreshToken: "",
  });
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  res.sendStatus(204); //forbidden
});
//Guardar direccion usuario
const saveAdress = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoId(_id);
  try {
    const updatedAddress = await User.findByIdAndUpdate(
      _id,
      {
        address: req?.body?.address,
      },
      {
        new: true,
      }
    );
    res.json(updatedAddress);
  } catch (error) {
    throw new Error(error);
  }
});
//Ver todos los usuarios
const getaUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});

//Ver un solo  usuario
const getsUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const getsUser = await User.findById(id);
    res.json({
      getsUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

//Borrar un usuario
const deletesUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);

  try {
    const deletesUser = await User.findByIdAndDelete(id);
    res.json({
      deletesUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});
//Actualizar un usuario
const updatedaUser = asyncHandler(async (req, res) => {
  const { id } = req.user;
  validateMongoId(id);
  try {
    const updatedaUser = await User.findByIdAndUpdate(
      id,
      {
        firstname: req?.body?.firstname,
        lastname: req?.body?.lastname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      {
        new: true,
      }
    );
    res.json(updatedaUser);
  } catch (error) {
    throw new Error(error);
  }
});
//Bloquear usuario
const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const block = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: true,
      },
      {
        new: true,
      }
    );
    res.json(block);
  } catch (error) {
    throw new Error(error);
  }
});
//Desbloquear usuario
const unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);

  try {
    const unblock = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: false,
      },
      {
        new: true,
      }
    );
    res.json({
      message: "Usuario desbloqueado",
    });
  } catch (error) {
    throw new Error(error);
  }
});
/*Actualizar contraseña*/
const updatePassword = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  validateMongoId(_id);
  const user = await User.findById(_id);
  if (password) {
    user.password = password;
    const updatedPassword = await user.save();
    res.json(updatedPassword);
  } else {
    res.json(user);
  }
});
//Borrar todos los usuarios
/*const deleteaUser = asyncHandler(async(req,res)=>{
    try{
        const getUsers = await User.delete();
        res.json(deleteaUser);
    }catch (error){
        throw new Error(error);
    }
});*/
/*Olvidaste tu constrsseña? correo*/
const forgotPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new Error("Usuario con este email no encontrado");
  try {
    const token = await user.createPasswordResetToken();
    await user.save();
    const resetURL = `Hola, sigue este link para reiniciar tu contraseña. Este link expirará en 10 minutos, contando desde ahora. <a href='http://localhost:5000/api/user/reset-password/${token}'>Click aqui</>`;
    const data = {
      to: email,
      subject: "Olvidaste tu constraseña link",
      text: "Hola usuario",
      html: resetURL,
    };
    sendEmail(data);
    res.json(token);
  } catch (error) {
    throw new Error(error);
  }
});
/*Reset contraseña en el correo*/
const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user)
    throw new Error("El token expiro. Por favor intenta de nuevo más tarde");
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  res.json(user);
});
/*Lista de deseos*/
const getWishList = asyncHandler(async (req, res) => {
  const { id } = req.user;
  try {
    const findUser = await User.findById(id).populate("wishlist");
    res.json(findUser);
  } catch (error) {
    throw new Error(error);
  }
});
/*ver Carrito de compras por usuario*/
const userCar = asyncHandler(async (req, res) => {
  const { productId, color, quantity, price } = req.body;
  const { _id } = req.user;
  validateMongoId(_id);
  try {
    let newCar = await new Car({
      userId: _id,
      productId,
      color,
      price,
      quantity,
    }).save();
    res.json(newCar);
  } catch (error) {
    throw new Error(error);
  }
});
/*Ver todos los carritos de compras*/
const getUserCar = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoId(_id);
  try {
    const car = await Car.find({ userId: _id })
      .populate("productId")
      .populate("color");
    res.json(car);
  } catch (error) {
    throw new Error(error);
  }
});
/*Eliminar un producto del carrito*/
const removeProductFromCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { cartItemId } = req.params;
  validateMongoId(_id);
  try {
    const deleteProductFromCart = await Car.deleteOne({
      userId: _id,
      _id: cartItemId,
    });
    res.json(deleteProductFromCart);
  } catch (error) {
    throw new Error(error);
  }
});
const updateProductQuantityFromCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { cartItemId, newQuantity } = req.params;
  validateMongoId(_id);
  try {
    const cartItem = await Car.findOne({ userId: _id, _id: cartItemId });
    cartItem.quantity = newQuantity;
    cartItem.save();
    res.json(cartItem);
  } catch (error) {
    throw new Error(error);
  }
});
const createOrder = asyncHandler(async(req,res)=>{
    const { shippingInfo, orderItems, totalPrice, totalPriceAfterDiscount, paymentInfo } = req.body;
    const {_id} = req.user;
    try{
        const order = await Order.create({
            shippingInfo, orderItems, totalPrice, totalPriceAfterDiscount, paymentInfo, user:_id
        })
        res.json({
            order,
            success:true,
        })
    }catch (error){
        throw new Error(error);
    }
})
/*Vaciar carrito de compras*/
/*const emptyCar = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoId(_id);
  try {
    const user = await User.findOne({ _id });
    const car = await Car.findOneAndRemove({ orderby: user._id });
    res.json(car);
  } catch (error) {
    throw new Error(error);
  }
});*/
/*Aplicar cupon*/
/*const applyCoupon = asyncHandler(async (req, res) => {
  const { coupon } = req.body;
  const { _id } = req.user;
  validateMongoId(_id);
  const validCoupon = await Coupon.findOne({ name: coupon });
  if (validCoupon == null) {
    throw new Error("Cupón inválido");
  }
  const user = await User.findOne({ _id });
  let { products, carTotal } = await Car.findOne({
    orderby: user._id,
  }).populate("products.product");
  let totalAfterDiscount = (
    carTotal -
    (carTotal * validCoupon.discount) / 100
  ).toFixed(2);
  await Car.findOneAndUpdate(
    { orderby: user._id },
    { totalAfterDiscount },
    { new: true }
  );
  res.json(totalAfterDiscount);
});*/
/*Crear una nueva orden con el cupon*/
/*
const createOrder = asyncHandler(async (req, res) => {
  const { COD, couponApplied } = req.body;
  const { _id } = req.user;
  validateMongoId(_id);
  try {
    if (!COD) throw new Error("Create cash order failed");
    const user = await User.findById(_id);
    let userCar = await Car.findOne({ orderby: user._id });
    let finalAmount = 0;
    if (couponApplied && userCar.totalAfterDiscount) {
      finalAmount = userCar.totalAfterDiscount;
    } else {
      finalAmount = userCar.carTotal;
    }
    let newOrder = await new Order({
      products: userCar.products,
      paymentIntent: {
        id: uniqid(),
        method: "COD",
        amount: finalAmount,
        status: "Pago contra entrega",
        created: Date.now(),
        currency: "cop",
      },
      orderby: user._id,
      orderStatus: "Pago contra entrega",
    }).save();
    let update = userCar.products.map((item) => {
      return {
        updateOne: {
          filter: { _id: item.product._id },
          update: { $inc: { quantity: -item.count, sold: +item.count } },
        },
      };
    });
    const updated = await Product.bulkWrite(update, {});
    res.json({ message: "Realizado" });
  } catch (error) {
    throw new Error(error);
  }
});*/
/*Ver todas las ordenes*/
/*
const getOrders = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoId(_id);
  try {
    const userOrders = await Order.findOne({ orderby: _id })
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(userOrders);
  } catch (error) {
    throw new Error(error);
  }
});*/
/*Modificación hoy*/
/*
const getAllOrders = asyncHandler(async (req, res) => {
  try {
    const alluserOrders = await Order.find()
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(alluserOrders);
  } catch (error) {
    throw new Error(error);
  }
});
const getOrderByUserId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoId(id);
  try {
    const userorders = await Order.findOne({ orderby: id })
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(userorders);
  } catch (error) {
    throw new Error(error);
  }
});*/
/*Actualizar Ordenes*/
/*
const updateOrders = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  validateMongoId(id);
  try {
    const updateOrderStatus = await Order.findByIdAndUpdate(
      id,
      {
        orderStatus: status,
        paymentIntent: {
          status: status,
        },
      },
      { new: true }
    );
    res.json(updateOrderStatus);
  } catch (error) {
    throw new Error(error);
  }
});*/
module.exports = {
  createUser,
  loginUserCtrl,
  getaUser,
  getsUser,
  deletesUser,
  updatedaUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishList,
  saveAdress,
  userCar,
  getUserCar,
  /*emptyCar,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrders,
  getAllOrders,
  getOrderByUserId,*/
  createOrder,
  removeProductFromCart,
  updateProductQuantityFromCart,
};
