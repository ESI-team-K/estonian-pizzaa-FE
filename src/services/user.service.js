import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://estonian-pizzaa-be.herokuapp.com/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getDriverBoard() {
    return axios.get(API_URL + 'driver', { headers: authHeader() });
  }

  getStaffBoard() {
    return axios.get(API_URL + 'staff', { headers: authHeader() });
  }
}

export default new UserService();