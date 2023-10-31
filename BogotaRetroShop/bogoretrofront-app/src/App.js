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

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
