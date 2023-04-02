<template>
  <v-list lines="three">
    <v-list-subheader>Tasks</v-list-subheader>

    <v-list-item
      v-for="item in tasksStore.tasks"
      :key="item.id"
      :value="item.id"
      rounded="xl"
      active-class="asd"
    >
      <template v-slot:prepend>
        <v-list-item-action start>
          <DoneCheckbox :item="item" @task:statusChanged="handleDone" />
        </v-list-item-action>
      </template>

      <v-list-item-title>{{ item.title }}</v-list-item-title>

      <v-list-item-subtitle>
        {{ item.subtitle }}
      </v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import DoneCheckbox from "@/components/TaskListView/DoneCheckbox.vue"
import type { Task } from "@/domain/task"
import { useTasksStore } from "@/stores/tasks"

export default defineComponent({
  name: "TasksView",
  components: { DoneCheckbox },
  setup() {
    const tasksStore = useTasksStore()
    return { tasksStore: tasksStore }
  },
  methods: {
    handleDone(task: Task) {
      this.tasksStore.updateTask(task)
    }
  }
})
</script>

<style scoped></style>