import axios from "axios";
import { User } from "../types/User";

export function index(){
  return axios.get<Array<Omit<User, "memories">>>(`http://localhost:4001/users`)
}

export function show(id: User["id"]){
  return axios.get<User>(`http://localhost:4001/users/${id}`)
}