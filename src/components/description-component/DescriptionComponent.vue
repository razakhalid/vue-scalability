<template>
  <p>{{ description }}</p>
</template>

<script>
export default {
  name: "description-component",
  props: {
    description: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped>

</style>