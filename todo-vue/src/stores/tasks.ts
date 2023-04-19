import { defineStore } from "pinia"
import type { ITask, Task } from "@/domain/task"
import _ from "lodash"

export interface TaskStoreState {
  taskIdCounter: number
  selectedTask: ITask | null
  tasks: ITask[]
}

export const useTasksStore = defineStore("tasks", {
  state: (): TaskStoreState => ({
    taskIdCounter: 0,
    selectedTask: null,
    tasks: []
  }),
  getters: {
    getTasks: (state): ITask[] => {
      return state.tasks
    },
    getSelectedTask: (state): ITask | null => {
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
      // modify task id
      task.id = this.taskIdCounter
      this.tasks.unshift(_.clone(task))
      this.taskIdCounter += 1
      return task
    },
    async deleteTaskById(taskId: number) {
      const index = _.findIndex(this.tasks, (item: ITask) => item.id === taskId)
      if (index != -1) {
        this.tasks.splice(index, 1)
      }
    },
    async updateTask(task: Task) {
      const index = _.findIndex(this.tasks, (item: ITask) => item.id === task.id)
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
