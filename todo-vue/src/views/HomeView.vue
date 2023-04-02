<template>
  <v-container>
    <v-row>
      <v-col md="4">
        <h1>Da</h1>
      </v-col>
      <v-col md="6">
        <TasksView />
      </v-col>
      <v-col md="4" hidden="hidden">
        <h1>da</h1>
      </v-col>
    </v-row>
  </v-container>
  <!--  <h1>Home view</h1>-->
  <!--  <RouterLink to="about">About</RouterLink>-->
</template>

<script lang="ts">
import TasksView from "@/components/TaskListView/TasksListView.vue"

export default {
  name: "HomeView.vue",
  components: { TasksView }
}
</script>

<style scoped></style>