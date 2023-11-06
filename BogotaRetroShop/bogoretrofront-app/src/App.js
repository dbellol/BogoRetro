import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import Terminos from './pages/Terminos';
import Login from './pages/Login';
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/WishList';
import Cart from './pages/Cart';
import Tarjetas from './pages/Tarjetas';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="store" element={<OurStore />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="terminos" element={<Terminos />} />
        <Route path="login" element={<Login />} />
        <Route path="compare" element={<CompareProduct />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="cart" element={<Cart />} />
        <Route path="tarjet" element={<Tarjetas />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="signup" element={<Signup />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
