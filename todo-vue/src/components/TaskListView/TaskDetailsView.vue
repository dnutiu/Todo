<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="d-flex align-center">
          <TaskDoneButton v-if="selectedTask" :item="selectedTask" />
          <span class="font-weight-bold">{{ selectedTask?.title }}</span>
          <v-spacer />
          <v-btn icon="mdi-star-plus-outline" variant="text"></v-btn>
          <v-btn icon="mdi-delete" variant="text"></v-btn>
        </div>
        <v-divider></v-divider>

        Debug info:
        {{ selectedTask }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useTasksStore } from "@/stores/tasks"
import TaskDoneButton from "@/components/TaskListView/TaskDoneButton.vue"

export default defineComponent({
  name: "TaskDetailsView",
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