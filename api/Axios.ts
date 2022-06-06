import axios from "axios";
const Axios = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "content-type": "application/json",
  },
});
export default Axios;
