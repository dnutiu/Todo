<template>
  <v-container>
    <v-row>
      <v-col v-if="selectedTask">
        <div class="d-flex align-center">
          <TaskDoneButton v-if="selectedTask" :item="selectedTask" />
          <span class="font-weight-bold">{{ selectedTask?.title }}</span>
          <v-spacer />
          <v-btn icon="mdi-star-plus-outline" variant="text"></v-btn>
          <v-btn icon="mdi-delete" variant="text"></v-btn>
        </div>
        <v-divider></v-divider>
        <div class="d-flex align-center">
          <v-textarea label="Description"></v-textarea>
        </div>
        <div class="d-flex align-center">
          Debug info:
          {{ selectedTask }}
        </div>
      </v-col>
      <v-col v-if="!selectedTask">
        <div class="d-flex flex-column align-center align-content-center">
          <v-icon
            class="task-details-empty-icon text-grey-darken-1"
            icon="mdi-robot-happy-outline"
          />
          <p>No task selected</p>
        </div>
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

<style scoped>
.task-details-empty-icon {
  font-size: 15em;
}
</style>