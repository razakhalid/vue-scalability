<template>
  <v-container class="buttons-wrapper ma-0 pa-0"
               vluid
  >
    <v-btn v-for="(headerItem, index) in content"
           exact
           :to="{ name: headerItem.name }"
           text
           :key="`${headerItem.name}_${index}`"
    >
      <span class="mr-2">{{ headerItem.title }}</span>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "HeaderButtonsComponent",
  props: {
    schema: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      content: this.schema
    }
  }
}
</script>

<style scoped>
.buttons-wrapper {
  background-color: lightblue;
}
</style>