import axios from "axios";

const newRequest = axios.create({
  baseURL: REACT_APP_URL,
  withCredentials: true,
});

export default newRequest;
