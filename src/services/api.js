import axios from "axios";

const api = axios.create({
  baseURL: "https://officeapi.akashrajpurohit.com/",
});

export default api;