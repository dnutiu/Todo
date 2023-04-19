<template>
  <v-btn :icon="icon" variant="text" @click="handleTaskStatusUpdate" />
</template>

<script lang="ts">
import type { PropType } from "vue"
import { defineComponent } from "vue"
import type { Task } from "@/domain/task"
import { useTasksStore } from "@/stores/tasks"

const iconUnchecked = "mdi-checkbox-blank-circle-outline"
const iconChecked = "mdi-checkbox-marked-circle-outline"

export default defineComponent({
  name: "TaskDoneButton",
  props: {
    item: {
      type: Object as PropType<Task>,
      required: true
    }
  },
  setup() {
    const tasksStore = useTasksStore()
    return { tasksStore: tasksStore }
  },
  computed: {
    icon() {
      return this.item.isDone ? iconChecked : iconUnchecked
    }
  },
  methods: {
    async handleTaskStatusUpdate() {
      let clonedItem = { ...this.item }
      clonedItem.isDone = !clonedItem.isDone
      await this.tasksStore.updateTask(clonedItem)
    }
  }
})
</script>

<style scoped></style>