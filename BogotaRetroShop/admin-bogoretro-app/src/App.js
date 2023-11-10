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
import Addblog from './pages/Addblog';
import Addblocat from './pages/Addblocat';
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
          <Route path="category" element={<Addblocat/>}/>
          <Route path="blog-category-list" element={<Blogcategorylist/>}/>
          <Route path="orders" element={<Orders/>}/>
          <Route path="customers" element={<Customers/>}/>
          <Route path="product-list" element={<Productlist/>}/>
          <Route path="list-brand" element={<Brandlist/>}/>
          <Route path="list-category" element={<Categorylist/>}/>
          <Route path="list-color" element={<Colorlist/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
