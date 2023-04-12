<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Task Details View</h1>
        {{ tasksStore.getSelectedTask }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useTasksStore } from "@/stores/tasks"

export default defineComponent({
  name: "TaskDetailsView",
  setup() {
    const tasksStore = useTasksStore()
    return { tasksStore: tasksStore }
  }
})
</script>

<style scoped></style>