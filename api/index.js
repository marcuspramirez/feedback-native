import axios from "axios";
const BASE_URL = "http://localhost:7979/employee";
export default {
  getEmployees() {
    return axios.get(`${BASE_URL}/employee`);
  },
};
