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
const { errorHandler, notFound } = require('./middlewares/errorHandler');
const morgan=require('morgan');
dbConnect();


app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.use('/api/user', authRouter);
app.use('/api/product', productRouter);
app.use('/api/blog', blogRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Servidor esta corriendo en puerto ${PORT}`);
});