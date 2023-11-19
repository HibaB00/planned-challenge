import axios from 'axios'
import { Memory } from '../types/Memory'

export function show(id: Memory['id']) {
  return axios.get<Memory>(`http://localhost:4001/memories/${id}`)
}

export function submit(memory: Omit<Memory, 'id'>) {
  return axios.post('http://localhost:4001/memories', memory)
}

export function update(memory: Omit<Memory, 'user_id'>) {
  return axios.put(`http://localhost:4001/memories/${memory.id}`, memory)
}

export function remove(id: Memory['id']) {
  return axios.delete(`http://localhost:4001/memories/${id}`)
}
