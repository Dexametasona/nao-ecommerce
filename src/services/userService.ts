import axios from "axios";
import { User, UserDtoLogin, UserDtoRegist } from "../interfaces/user";

const APIURL = "https://6670ba240900b5f8724b74f4.mockapi.io/api/v1/user"

export const UserService = {
  register: async (userData: UserDtoRegist) => {
    const response = await axios.post(APIURL, userData);
    return response;
  },
  login: async ({email,password}:UserDtoLogin) => {
    const response = await axios.get(APIURL);
    const data = response.data as User[];
    return data.find(user=>(user.email===email && user.password===password));

  },
  getCliente : async()=>{
    const response = await axios.get(APIURL);
    const users = response.data as User[];

    return users.map(user=>{
      return {...user, createDate:getRandomDate()}
    })
  }
};

function getRandomDate() {
  const start = new Date(2024, 0, 1);
  const end = new Date(2024, 3, 30);
  const randomTime =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime);
}
