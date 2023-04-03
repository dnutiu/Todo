<template>
  <v-form ref="taskInputForm" class="d-flex">
    <v-text-field
      clearable
      v-model="taskName"
      :rules="taskNameRules"
      label="Task Name"
      single-line
      required
      prepend-inner-icon="mdi-checkbox-marked-circle-plus-outline"
      @keydown.enter="handleAddTask"
    ></v-text-field>
    <v-btn ref="focusTrap" class="mx-5" icon="mdi-send" @click="handleAddTask" />
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useTasksStore } from "@/stores/tasks"
import type { VTextField } from "vuetify/components"

export default defineComponent({
  name: "NewTask",
  setup() {
    const tasksStore = useTasksStore()
    return { tasksStore: tasksStore }
  },
  data() {
    return {
      valid: false,
      taskName: "",
      taskNameRules: [
        (value: any) => {
          if (value) {
            return true
          }
          return "Task name is required"
        }
      ]
    }
  },
  methods: {
    async handleAddTask() {
      try {
        let taskTitle = this.taskName
        if (taskTitle === "" || taskTitle == null) {
          return
        }
        await this.tasksStore.addTask({
          title: taskTitle
        })
      } finally {
        ;(this.$refs.taskInputForm as VTextField).reset()
        let lastItem = document.querySelector("#task-list > div:last-child") as HTMLElement
        lastItem.focus()
      }
    }
  }
})
</script>

<style scoped></style>