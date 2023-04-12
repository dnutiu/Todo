import { defineStore } from "pinia"
import type { Task } from "@/domain/task"
import _ from "lodash"

export interface TaskStoreState {
  taskIdCounter: number
  selectedTask: Task | null
  tasks: Task[]
}

export const useTasksStore = defineStore("tasks", {
  state: (): TaskStoreState => ({
    taskIdCounter: 0,
    selectedTask: null,
    tasks: []
  }),
  getters: {
    getTasks: (state): Task[] => {
      return state.tasks
    },
    getSelectedTask: (state): Task | null => {
      return state.selectedTask
    }
  },
  actions: {
    async setSelected(task: Task) {
      if (task == null) {
        return
      }
      this.selectedTask = task
    },
    async addTask(task: Task): Promise<Task> {
      task.id = this.taskIdCounter
      task.isDone = task.isDone || false
      task.subtitle = task.subtitle || ""
      task.createdDateMs = task.createdDateMs || new Date().getTime()

      this.tasks.unshift(task)
      this.taskIdCounter += 1
      return task
    },
    async deleteTaskById(taskId: number) {
      const index = _.findIndex(this.tasks, (item: Task) => item.id === taskId)
      if (index != -1) {
        this.tasks.splice(index, 1)
      }
    },
    async updateTask(task: Task) {
      const index = _.findIndex(this.tasks, (item: Task) => item.id === task.id)
      if (index != -1) {
        this.tasks.splice(index, 1, task)
        if (this.selectedTask?.id == task.id) {
          await this.setSelected(task)
        }
      } else {
        throw new Error(`Invalid call to update task, task with id ${task.id} does not exists!`)
      }
    }
  }
})
