<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  created() {
    // @ts-ignore
    if (process.env.IS_ELECTRON) {
      this.$router.push("/")
    }
  }
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>