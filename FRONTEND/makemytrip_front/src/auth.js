import axios from "axios";
import { getToken } from "./component/login/loginpanel/LoginForm";

axios.defaults.withCredentials = true;

class Auth {
  constructor() {
    this.authenticated = false;
  }

  isAuthenticated() {
    const accessToken = getToken();
    const refreshToken = getToken(); // Assuming both access and refresh tokens are stored the same way
    if (!accessToken && !refreshToken) {
      this.authenticated = false;
    } else if (accessToken && refreshToken) {
      this.authenticated = true;
    }
    return this.authenticated;
  }
}

export default new Auth();
