<template>
  <div>
    <b>{{ comment }}</b>
    <v-rating length="5" size="20" :value="rate" readonly/>
  </div>
</template>

<script>
export default {
  name: "ReviewComponent",
  props: {
    comment: {
      type: String,
      default: ""
    },
    rate: {
      type: Number,
      default: 1,
    }
  }
}
</script>