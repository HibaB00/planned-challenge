import axios from "axios";
import { Memory } from "../types/Memory";

export function show(id: Memory["id"]) {
  return axios.get<Memory>(`http://localhost:4001/memories/${id}`)
}

export function submit(memory: Omit<Memory, "id">) {
  return axios.post('http://localhost:4001/memories', memory)
}