import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://swiptory-back-end.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
