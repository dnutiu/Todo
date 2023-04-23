<template>
  <div class="d-flex align-center">
    <!--suppress TypeScriptValidateTypes -->
    <v-textarea
      label="Description"
      v-model="description"
      @update:model-value="handleModelUpdate"
    ></v-textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useTasksStore } from "@/stores/tasks"
import _ from "lodash"

export default defineComponent({
  name: "TaskDetailsTaskDescription",
  data() {
    return {
      description: "",
      debouncedUpdateTask: null as unknown as (description: string) => void | null
    }
  },
  setup() {
    const tasksStore = useTasksStore()
    return { tasksStore: tasksStore }
  },
  methods: {
    handleModelUpdate(value: string) {
      this.debouncedUpdateTask(value)
    },
    updateTask(taskDescription: string) {
      if (this.tasksStore.selectedTask != null) {
        this.tasksStore.selectedTask.description = taskDescription
      }
    }
  },
  created() {
    this.debouncedUpdateTask = _.debounce(this.updateTask)
    this.description = this.tasksStore.selectedTask?.description || ""
  }
})
</script>

<style scoped></style>