<template>
  <v-layout>
    <header>
      <ApplicationBar />
    </header>
    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import ApplicationBar from "@/components/ApplicationBar.vue"

export default defineComponent({
  components: { ApplicationBar }
})
</script>
