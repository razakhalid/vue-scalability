
<template>
  <v-row class="ml-2">
    <v-col
        cols="3"
        v-for="(value, index) in localData"
        :key="`${value.name}_${index}`"
    >
      <router-link :to="{ name: 'FilmView', params:{id:value.id} }">
        <v-card class="mx-auto" max-width="374">
          <v-img height="250" :src="value.image"></v-img>
          <v-card-text class="mt-0">{{ value.name }}</v-card-text>
          <v-card-text class="mt-0">{{ value.year }}</v-card-text>
          <v-card-text class="mt-0">{{ value.genre }}</v-card-text>
        </v-card>
      </router-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ProductsTemplate",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      localData: this.data,
    };
  },
};
</script>

<style scoped></style>