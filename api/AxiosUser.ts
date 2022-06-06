import axios from "axios";
const AxiosUser = axios.create({
  baseURL: "https://reqres.in",
  headers: {
    "content-type": "application/json",
  },
});
export default AxiosUser;
