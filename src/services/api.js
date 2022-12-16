import axios from "axios";

// 26178370/json

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export default api;
