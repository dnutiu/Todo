<template>
  <v-container>
    <v-row>
      <v-col v-if="selectedTask" :key="selectedTask.id">
        <TaskDetailsTaskTitle />
        <v-divider></v-divider>
        <TaskDetailsTaskDescription />
        <div class="d-flex align-center">
          Debug info:
          {{ selectedTask }}
        </div>
      </v-col>
      <!--      Page to show when no task is selected-->
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
import TaskDetailsTaskTitle from "@/components/TaskListView/TaskDetailsTaskTitle.vue"
import TaskDetailsTaskDescription from "@/components/TaskListView/TaskDetailsTaskDescription.vue"

export default defineComponent({
  name: "TaskDetailsView",
  components: { TaskDetailsTaskDescription, TaskDetailsTaskTitle },
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