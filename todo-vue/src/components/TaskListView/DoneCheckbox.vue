<template>
  <v-btn :icon="icon" variant="text" @click="handleTaskStatusUpdate" />
</template>

<script lang="ts">
import type { PropType } from "vue"
import { defineComponent } from "vue"
import type { Task } from "@/domain/task"

const iconUnchecked = "mdi-checkbox-blank-circle-outline"
const iconChecked = "mdi-checkbox-marked-circle-outline"

export default defineComponent({
  name: "DoneCheckbox",
  emits: ["task:statusChanged"],
  props: {
    item: {
      type: Object as PropType<Task>,
      required: true
    }
  },
  computed: {
    icon() {
      return this.item.isDone ? iconChecked : iconUnchecked
    }
  },
  methods: {
    handleTaskStatusUpdate() {
      let clonedItem = { ...this.item }
      clonedItem.isDone = !clonedItem.isDone
      this.$emit("task:statusChanged", clonedItem)
    }
  }
})
</script>

<style scoped></style>