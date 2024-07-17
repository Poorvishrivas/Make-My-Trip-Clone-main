import axios from "axios";
import Cookies from "universal-cookie";
import { getToken } from "./component/login/loginpanel/LoginForm";
const cookies = new Cookies();

axios.defaults.withCredentials = true;
class Auth {
  constructor() {
    this.authenticated = false;
  }

  isAuthenticated() {
    const accessToken = getToken();
    const refreshToken = getToken();
    if (!accessToken && !refreshToken) {
      return (this.authenticated = false);
    }
    if (accessToken && refreshToken) {
      return (this.authenticated = true);
    }
  }
}

export default new Auth();
