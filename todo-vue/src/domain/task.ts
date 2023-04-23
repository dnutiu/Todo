export interface Task {
  id?: number
  title: string
  createdDateMs: number
  description: string
  isDone: boolean
}

export const emptyTask = {
  title: "",
  createdDateMs: 0,
  description: "",
  isDone: false
}
