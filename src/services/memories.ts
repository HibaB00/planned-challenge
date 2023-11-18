import axios from "axios";
import { Memory } from "../types/Memory";

export function submit(memory: Omit<Memory, "id">){
  axios({
    method: 'post',
    url: 'http://localhost:4001/memories',
    data: memory
  });
}