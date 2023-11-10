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
          <Route path="blog-list" element={<Bloglist/>}/>
          <Route path="blog-category-list" element={<Blogcategorylist/>}/>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
