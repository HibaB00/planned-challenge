export type Memory = {
  id: number,
  name: string,
  description: string,
  timestamp: string
}

export type NewMemory = Omit<Memory, "id">