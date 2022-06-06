import { IAccount, ILogin, IUser } from "../types/interface";
import Axios from "./Axios";
import AxiosUser from "./AxiosUser";

const apiUser = {
  //get
  getPagin: (id: string | string[] | number) => {
    const url = `/api/users?page=${id}`;
    return AxiosUser.get(url);
  },
  getUser: (id: string | undefined) => {
    const url = `/api/users/${id}`;
    return AxiosUser.get(url);
  },
  getAllUser: () => {
    const url = `/api/users`;
    return AxiosUser.get(url);
  },
  //post
  login: (data: ILogin) => {
    const url = `/api/login`;
    return AxiosUser.post(url, data);
  },
  register: (data: IAccount) => {
    const url = `/api/register`;
    return AxiosUser.post(url, data);
  },
  addUser: (data: IAccount) => {
    const url = `/api/users`;
    return AxiosUser.post(url, data);
  },
  editUser: ( data: IUser) => {
    const url = `/api/users/2`;
    return AxiosUser.put(url, data);
  },
};
export default apiUser;
