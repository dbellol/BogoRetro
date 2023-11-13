import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import MainLayout from './components/MainLayout';
import Enquiries from './pages/Enquiries';
import Bloglist from './pages/Bloglist';
import Blogcategorylist from './pages/Blogcategorylist';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Productlist from './pages/ProductList';
import Brandlist from './pages/BrandList';
import Categorylist from './pages/Categorylist';
import Colorlist from './pages/Colorlist';
import CouponList from './pages/CouponList';
import Addblog from './pages/Addblog';
import Addblocat from './pages/Addblocat';
import Addcolor from './pages/Addcolor';
import Addcat from './pages/Addcat';
import Addbrand from './pages/Addbrand';
import Addproduct from './pages/Addproduct';
import AddCoupon from './pages/AddCoupon';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/admin" element={<MainLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="enquiries" element={<Enquiries/>}/>
          <Route path="blog" element={<Addblog/>}/>
          <Route path="blog-list" element={<Bloglist/>}/>
          <Route path="blog-category" element={<Addblocat/>}/>
          <Route path="blog-category-list" element={<Blogcategorylist/>}/>
          <Route path="orders" element={<Orders/>}/>
          <Route path="customers" element={<Customers/>}/>
          <Route path="product" element={<Addproduct/>}/>
          <Route path="product-list" element={<Productlist/>}/>
          <Route path="brand" element={<Addbrand/>}/>
          <Route path="list-brand" element={<Brandlist/>}/>
          <Route path="category" element={<Addcat/>}/>
          <Route path="list-category" element={<Categorylist/>}/>
          <Route path="color" element={<Addcolor/>}/>
          <Route path="list-color" element={<Colorlist/>}/>
          <Route path="coupon" element={<AddCoupon/>}/>
          <Route path="coupon-list" element={<CouponList/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
