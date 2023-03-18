<template>
  <v-container fluid class="px-0 pa-0">
    <v-alert type="info">{{ content }}</v-alert>
  </v-container>
</template>

<script>
export default {
  name: "AnnouncementComponent",
  props: {
    schema: {
      default: "",
      type: String
    }
  },
  data() {
    return {
      content: this.schema
    }
  }
}
</script>

<style scoped>

</style>