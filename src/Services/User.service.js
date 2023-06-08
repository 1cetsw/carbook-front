import axios from "axios";


const API_URL = global.config.HostFront+"/api/carbook/";

const getPublicContent = () => {
  return axios.get(API_URL  );
};
const getPublicHome = () => {
  return axios.get(API_URL + "home" );
};

const getUserBoard = () => {
  return axios.get(API_URL + "user");
};

const getWorkshopBoard = () => {
  return axios.get(API_URL + "workshop");
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin");
};

const UserService = {
  getPublicContent,
  getPublicHome,
  getUserBoard,
  getWorkshopBoard,
  getAdminBoard,
}

export default UserService;
