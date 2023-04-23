<template>
  <div class="d-flex">
    <v-text-field
      clearable
      :error="false"
      :error-messages="taskNameErrorMessage"
      v-model="taskName"
      label="Task Name"
      single-line
      prepend-inner-icon="mdi-checkbox-marked-circle-plus-outline"
      @keydown.enter="handleAddTask"
    ></v-text-field>
    <v-btn class="mx-5" icon="mdi-send" @click="handleAddTask" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useTasksStore } from "@/stores/tasks"

export default defineComponent({
  name: "NewTask",
  setup() {
    const tasksStore = useTasksStore()
    return { tasksStore: tasksStore }
  },
  data() {
    return {
      taskNameHasError: false,
      taskNameErrorMessage: "",
      taskName: ""
    }
  },
  methods: {
    async handleAddTask() {
      try {
        let taskTitle = this.taskName
        this.taskNameHasError = false
        this.taskNameErrorMessage = ""
        if (taskTitle === "" || taskTitle == null) {
          this.taskNameHasError = true
          this.taskNameErrorMessage = "Task Name is required."
          return
        }
        let task = await this.tasksStore.addTask({
          title: taskTitle,
          createdDateMs: new Date().getTime(),
          description: "",
          isDone: false
        })
        await this.tasksStore.setSelected(task)
      } finally {
        this.taskName = ""
        let activeItems = document.querySelectorAll("#task-list > .v-list-item--active")
        for (let item of activeItems) {
          item.classList.remove("v-list-item--active")
        }
        let lastItem = document.querySelector("#task-list > div:nth-child(2)") as HTMLElement
        lastItem.classList.add("v-list-item--active")
      }
    }
  }
})
</script>

<style scoped></style>