import { Memory } from "./Memory"

export type User = {
  id: number,
  name: string,
  description: string,
  image_url: string,
  memories: Array<Memory>
}