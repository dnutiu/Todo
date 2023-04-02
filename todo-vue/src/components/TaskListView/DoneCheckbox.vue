<template>
  <v-checkbox-btn
    :model-value="item.isDone"
    @update:modelValue="handleTaskStatusUpdate"
  ></v-checkbox-btn>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import type { Task } from "@/domain/task"

export default defineComponent({
  name: "DoneCheckbox",
  emits: ["task:statusChanged"],
  props: {
    item: {
      type: Object as PropType<Task>,
      required: true
    }
  },
  methods: {
    handleTaskStatusUpdate(status: any) {
      let clonedItem = { ...this.item }
      clonedItem.isDone = status
      this.$emit("task:statusChanged", clonedItem)
    }
  }
})
</script>

<style scoped></style>