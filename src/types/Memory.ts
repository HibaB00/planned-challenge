import { User } from "./User"

export type Memory = {
  id: number,
  name: string,
  description: string,
  timestamp: string,
  image_url: string,
  user_id: User["id"]
}

export type NewMemory = Omit<Memory, "id">