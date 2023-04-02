<template>
  <v-list lines="three">
    <v-list-subheader>Tasks</v-list-subheader>

    <v-list-item
      v-for="item in items"
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

interface TaskListData {
  items: Task[]
}

export default defineComponent({
  name: "TasksView",
  components: { DoneCheckbox },
  data(): TaskListData {
    return {
      items: [
        {
          id: 1,
          title: "Notifications",
          subtitle: "Notify me about updates to apps or games that I downloaded",
          isDone: false
        },
        {
          id: 2,
          title: "Sound",
          subtitle: "Auto-update apps at any time. Data charges may apply",
          isDone: true
        },
        {
          id: 3,
          title: "Auto-add widgets",
          subtitle: "Automatically add home screen widgets when downloads complete",
          isDone: false
        }
      ]
    }
  },
  methods: {
    handleDone(task: Task) {
      console.log(task)
      // TODO: Update store
      for (let i = 0; i < this.items.length; i++) {
        let item = this.items[i]
        if (item.id == task.id) {
          item.isDone = task.isDone
        }
      }
    }
  }
})
</script>

<style scoped>
.v-list-item--active {
}
</style>