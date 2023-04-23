<template>
  <div class="d-flex align-center">
    <TaskDoneButton :item="selectedTask" />
    <span class="font-weight-bold">{{ selectedTask?.title }}</span>
    <v-spacer />
    <v-btn icon="mdi-star-plus-outline" variant="text"></v-btn>
    <v-btn icon="mdi-delete" variant="text"></v-btn>
  </div>
</template>

<script lang="ts">
import TaskDoneButton from "@/components/TaskListView/TaskDoneButton.vue"
import { defineComponent } from "vue"
import { useTasksStore } from "@/stores/tasks"
import { emptyTask } from "@/domain/task"

export default defineComponent({
  name: "TaskDetailsTaskTitle",
  components: { TaskDoneButton },
  setup() {
    const tasksStore = useTasksStore()
    return { tasksStore: tasksStore }
  },
  computed: {
    selectedTask() {
      return this.tasksStore.getSelectedTask || emptyTask
    }
  }
})
</script>

<style scoped></style>