const express = require('express');
const bodyParser = require('body-parser');
const cookieParser= require('cookie-parser');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRouter=require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const blogRouter = require('./routes/blogRoutes');
const categoryRouter = require('./routes/productCategoryRoutes');
const blogCategoryRouter = require('./routes/blogCatRoutes');
const brandRouter=require('./routes/brandRoutes');
const couponRouter=require('./routes/couponRoute');
const colorRouter=require('./routes/colorRoute');
const enqRouter = require('./routes/enqRoute');
const uploadRouter = require('./routes/uploadRoute');
const { errorHandler, notFound } = require('./middlewares/errorHandler');
const morgan=require('morgan');
dbConnect();
const cors = require('cors');

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.use('/api/user', authRouter);
app.use('/api/product', productRouter);
app.use('/api/blog', blogRouter);
app.use('/api/category', categoryRouter);
app.use('/api/blogcategory', blogCategoryRouter);
app.use('/api/brand', brandRouter);
app.use('/api/coupon', couponRouter);
app.use('/api/color', colorRouter);
app.use('/api/enquiry', enqRouter);
app.use('/api/upload', uploadRouter);




app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Servidor esta corriendo en puerto ${PORT}`);
});