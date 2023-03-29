<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Todo</v-app-bar-title>
    <v-spacer></v-spacer>

    <v-btn icon>
      <!-- TODO Implement or redirect to search -->
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="bottom" temporary>
    <div v-for="i in 100" v-bind:key="i">
      <h1>Here are the settings</h1>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "ApplicationBar",
  data: () => ({
    drawer: false
  })
}
</script>

<style>
.v-navigation-drawer {
  height: 90vh !important;
}
</style>
