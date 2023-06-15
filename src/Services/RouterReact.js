import { Routes, Route } from 'react-router-dom'

import Login from "../Components/Profile/Login";
import Register from "../Components/Profile/Register";
import Home from "../Components/Home";
import Profile from "../Components/Profile/Profile";

import BoardModerator from "../Components/Profile/BoardWorkshop";
import BoardAdmin from "../Components/Profile/BoardAdmin";
import BoardUser from "../Components/Profile/BoardUser";
import Test from "../Components/Test/Test";
import Cars from '../Components/Test/FetchApi/FetchApiHookCars';
import Users from '../Components/Test/FetchApi/FetchApiHookUsers';
import Workshops from '../Components/Test/FetchApi/FetchApiHookWorkshops';
import RegistrationCar from '../Components/Test/RegisterForm/RegistrationCar';

import About from "../Components/Pages/About";
import NotFound from '../Components/Pages/NotFound';
import Dashboard from '../Components/Profile/Dashboard';

const RouterReact = () => (
  
  <Routes>
    <Route path={"/"} element={<Home />} />

    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/user" element={<BoardUser />} />
    <Route path="/workshop" element={<BoardModerator />} />
    <Route path="/admin" element={<BoardAdmin />} />
    <Route path="/about" element={<About />} />
    <Route path="/notfound" element={<NotFound />} />
    <Route path="/test" element={<Test />} />
    <Route path="/dashboard" element={<Dashboard />} />
    
    <Route path="/add-car" element={<RegistrationCar />} />
    <Route path="/cars" element={<Cars />} />

    <Route path="/users" element={<Users />} />
    
    <Route path="/workshops" element={<Workshops />} />


  </Routes>
  
  
)

export default RouterReact
