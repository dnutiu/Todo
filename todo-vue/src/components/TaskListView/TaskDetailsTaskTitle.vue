<template>
  <div class="d-flex align-center" v-if="selectedTask">
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

export default defineComponent({
  name: "TaskDetailsTaskTitle",
  components: { TaskDoneButton },
  setup() {
    const tasksStore = useTasksStore()
    return { tasksStore: tasksStore }
  },
  computed: {
    selectedTask() {
      return this.tasksStore.getSelectedTask
    }
  }
})
</script>

<style scoped></style>