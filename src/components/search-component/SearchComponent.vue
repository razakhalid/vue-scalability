<template>
  <v-row class="align-center justify-center">
    <v-col cols="9">
      <v-text-field
          :label="label"
          prepend-icon="mdi-magnify"
          clearable
          :value="searchTerm"
          @input="onInput"
      ></v-text-field>
    </v-col>
    <v-col cols="9">
      <v-btn @click="onSearchClicked" class="mr-2">Search</v-btn>
      <v-btn @click="onResetClicked" text>Reset</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SearchComponent",
  props: {
    label: {
      type: String,
      default: "search all"
    },
  },
  data() {
    return {
      searchTerm: this.$route.query.q || ""
    }
  },
  methods: {
    onInput(value) {
      this.searchTerm = value;
    },
    onSearchClicked() {
      this.$router.push({
        query: {
          q: this.searchTerm
        }
      });
    },
    onResetClicked() {
      this.$router.push({
        query: {}
      });
    }
  }
}
</script>

<style scoped>

</style>