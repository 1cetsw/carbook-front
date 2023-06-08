import { Routes, Route } from 'react-router-dom'

import Login from "../Components/Profile/Login";
import Register from "../Components/Profile/Register";
import Home from "../Components/Home";
import Profile from "../Components/Profile/Profile";

import BoardModerator from "../Components/Profile/BoardWorkshop";
import BoardAdmin from "../Components/Profile/BoardAdmin";
import BoardUser from "../Components/Profile/BoardUser";
import Test from "../Components/Test/Test";
import Cars from '../Components/Test/FetchApi/Cars/FetchApiHookCars';
import Owners from '../Components/Test/FetchApi/Owners/FetchApiHookOwners';
import Workshops from '../Components/Test/FetchApi/Workshops/FetchApiHookWorkshops';
import RegistrationCar from '../Components/Test/RegisterForm/RegistrationCar';
import RegistrationOwner from '../Components/Test/RegisterForm/RegistrationOwner';
import RegistrationWorkshop from '../Components/Test/RegisterForm/RegistrationWorkshop';
import About from "../Components/Pages/About";
import NotFound from '../Components/Pages/NotFound';

const RouterReact = () => (

  <Routes>
    <Route path={"/"} element={<Home />} />

    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/user" element={<BoardUser />} />
    <Route path="/mod" element={<BoardModerator />} />
    <Route path="/admin" element={<BoardAdmin />} />
    <Route path="/about" element={<About />} />
    <Route path="/notfound" element={<NotFound />} />
    <Route path="/test" element={<Test />} />
    
    <Route path="/add-car" element={<RegistrationCar />} />
    <Route path="/cars" element={<Cars />} />

    <Route path="/owners" element={<Owners />} />
    <Route path="/add-owner" element={<RegistrationOwner />} />


    <Route path="/add-workshop" element={<RegistrationWorkshop />} />
    <Route path="/workshops" element={<Workshops />} />


  </Routes>

)

export default RouterReact
