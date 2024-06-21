import axios from "axios";
import { User, UserRequest } from "../interfaces/user";

const APIURL = "https://6670ba240900b5f8724b74f4.mockapi.io/api/v1/user"

export const UserService = {
  register: async (userData: User) => {
    const response = await axios.post(APIURL, userData);
    return response;
  },
  login: async ({email,password}:UserRequest) => {
    const response = await axios.get(APIURL);
    const data = response.data as User[];
    return data.find(user=>(user.email===email && user.password===password));

  },
};