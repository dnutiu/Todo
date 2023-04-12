import { defineStore } from "pinia"
import type { Task } from "@/domain/task"
import _ from "lodash"

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    taskIdCounter: 0 as number,
    tasks: [] as Task[]
  }),
  getters: {
    getTasks: (state): Task[] => {
      return state.tasks
    }
  },
  actions: {
    async addTask(task: Task) {
      task.id = this.taskIdCounter
      task.isDone = task.isDone || false
      task.subtitle = task.subtitle || ""
      task.createdDateMs = task.createdDateMs || new Date().getTime()

      this.tasks.unshift(task)
      this.taskIdCounter += 1
    },
    deleteTaskById(taskId: number) {
      const index = _.findIndex(this.tasks, (item: Task) => item.id === taskId)
      if (index != -1) {
        this.tasks.splice(index, 1)
      }
    },
    updateTask(task: Task) {
      const index = _.findIndex(this.tasks, (item: Task) => item.id === task.id)
      if (index != -1) {
        this.tasks.splice(index, 1, task)
      } else {
        throw new Error(`Invalid call to update task, task with id ${task.id} does not exists!`)
      }
    }
  }
})
