import { Routes, Route } from 'react-router-dom'

import Login from "../Components/Profile/Login";
import Register from "../Components/Profile/Register";
import Home from "../Components/Home";
import Profile from "../Components/Profile/Profile";
import BoardModerator from "../Components/Profile/BoardWorkshop";
import BoardAdmin from "../Components/Profile/BoardAdmin";
import BoardUser from "../Components/Profile/BoardUser";
import Cars from '../Components/Test/FetchApi/FetchApiHookCars';
import Users from '../Components/Test/FetchApi/FetchApiHookUsers';
import Workshops from '../Components/Test/FetchApi/FetchApiHookWorkshops';
import NewCarForm from '../Components/Car/NewCarForm';
import About from "../Components/Pages/About";
import NotFound from '../Components/Pages/NotFound';
import Dashboard from '../Components/Profile/Dashboard';
import CarDetails from "../Components/Car/CarDetails";
import ShowHistory from "../Components/Car/ShowHistory";
import LastService from "../Components/Car/LastService";
import NewRepair from "../Components/Car/NewRepair";


const RouterReact = () => (

  <Routes>
    <Route path={"/"} element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/user" element={<BoardUser />} />
    <Route path="/workshop" element={<BoardModerator />} />
    <Route path="/adminboard" element={<BoardAdmin />} />
    <Route path="/about" element={<About />} />
    <Route path="/notfound" element={<NotFound />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/new-car-form" element={<NewCarForm />} />
    <Route path="/cars" element={<Cars />} />
    <Route path="/users" element={<Users />} />
    <Route path="/workshops" element={<Workshops />} />
    <Route path="/car-details" element={<CarDetails />} />
    <Route path="/car-history" element={<ShowHistory />} />
    <Route path="/last-service" element={<LastService />} />
      <Route path="/add-repair" element={<NewRepair />} />
  </Routes>


)

export default RouterReact
