
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import ServiceOrder from './Pages/Home/ServiceOrder';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';

import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className='max-w-7xl	mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service/:serviceId" element={<RequireAuth><ServiceOrder /></RequireAuth>}></Route> 
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}></Route> 
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
