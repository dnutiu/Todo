<template>
  <v-list :lines="'one'" id="task-list">
    <v-list-subheader>Tasks</v-list-subheader>

    <v-list-item
      v-for="item in tasksStore.tasks"
      :key="item.id"
      :value="item.id"
      rounded="xl"
      active-class="asd"
      class="task-item"
      @click.stop="handleClick(item)"
    >
      <template v-slot:prepend>
        <v-list-item-action start>
          <TaskDoneButton :item="item" />
        </v-list-item-action>
      </template>

      <v-list-item-title>{{ item.title }}</v-list-item-title>

      <v-list-item-subtitle>
        <span class="ellipsis-text-overflow">{{ item.description }}</span>
      </v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import TaskDoneButton from "@/components/TaskListView/TaskDoneButton.vue"
import type { Task } from "@/domain/task"
import { useTasksStore } from "@/stores/tasks"
import { id } from "vuetify/locale"

export default defineComponent({
  name: "TasksListView",
  computed: {
    id() {
      return id
    }
  },
  components: { TaskDoneButton },
  setup() {
    const tasksStore = useTasksStore()
    return { tasksStore: tasksStore }
  },
  methods: {
    async handleClick(task: Task): Promise<void> {
      let activeItems = document.querySelectorAll("#task-list > .v-list-item--active")
      for (let item of activeItems) {
        item.classList.remove("v-list-item--active")
      }
      await this.tasksStore.setSelected(task)
    }
  }
})
</script>

<style scoped>
.ellipsis-text-overflow {
  max-width: 90vw;
  text-overflow: ellipsis;
}
</style>