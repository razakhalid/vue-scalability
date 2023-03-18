<template>
  <div class="jumbotron">{{ schema }}</div>
</template>

<script>
export default {
  name: "JumbotronComponent",
  props: {
    schema: {
      default: "",
      type: String
    },
    data() {
      return {
        content: this.schema
      }
    }
  }
}
</script>

<style scoped>

</style>