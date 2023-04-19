<template>
  <v-container fluid>
    <v-row>
      <v-col sm="12" md="4">
        <h1>Da</h1>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col sm="12" md="4">
        <v-row>
          <v-col>
            <NewTask />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <TasksListView />
          </v-col>
        </v-row>
      </v-col>
      <v-divider vertical></v-divider>
      <!--      Hide this when size is small and redirect directly to task-->
      <v-col md="4">
        <TaskDetailsView />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import TasksListView from "@/components/TaskListView/TasksListView.vue"
import { defineComponent } from "vue"
import { useTasksStore } from "@/stores/tasks"
import NewTask from "@/components/TaskListView/NewTask.vue"
import TaskDetailsView from "@/components/TaskListView/TaskDetailsView.vue"

export default defineComponent({
  name: "HomeView.vue",
  components: { TaskDetailsView, NewTask, TasksListView },
  setup() {
    const tasksStore = useTasksStore()
    return { tasksStore: tasksStore }
  },
  created() {
    // Add random tasks.
    // let items = [
    //   {
    //     id: 1,
    //     title: "Notifications",
    //     subtitle: "Notify me about updates to apps or games that I downloaded",
    //     isDone: false
    //   },
    //   {
    //     id: 2,
    //     title: "Sound",
    //     subtitle: "Auto-update apps at any time. Data charges may apply",
    //     isDone: true
    //   },
    //   {
    //     id: 3,
    //     title: "Auto-add widgets",
    //     subtitle: "Automatically add home screen widgets when downloads complete",
    //     isDone: false
    //   }
    // ]
    // let self = this
    // items.forEach((task) => {
    //   self.tasksStore.addTask(task)
    // })
  }
})
</script>

<style scoped></style>