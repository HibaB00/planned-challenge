import { Memory } from "./Memory"

export type User = {
  id: number,
  name: string,
  description: string,
  memories: Array<Memory>
}