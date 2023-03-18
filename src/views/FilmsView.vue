<template>
  <div class="d-flex">
    <aside class="px-2 white--text">Filters</aside>
    <v-container class="pa-0">

      <!--   ControlPanel   -->
      <v-row class="ml-2">
        <v-col cols="9">
          <v-text-field
              label="Search Films"
              prepend-icon="mdi-magnify"
              clearable
          ></v-text-field>
        </v-col>
        <v-col cols="3" class="align-self-center">
          <v-pagination v-model="page" :length="4" circle></v-pagination>
        </v-col>
      </v-row>

      <v-row class="ml-2">
        <v-col cols="3">
          <v-card class="mx-auto" max-width="374">
            <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text class="mt-0">Name</v-card-text>
            <v-card-text class="mt-0">Year</v-card-text>
            <v-card-text class="mt-0">Genre</v-card-text>
          </v-card>
          <v-card class="mx-auto" max-width="374">
            <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text class="mt-0">Name</v-card-text>
            <v-card-text class="mt-0">Year</v-card-text>
            <v-card-text class="mt-0">Genre</v-card-text>
          </v-card>
          <v-card class="mx-auto" max-width="374">
            <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text class="mt-0">Name</v-card-text>
            <v-card-text class="mt-0">Year</v-card-text>
            <v-card-text class="mt-0">Genre</v-card-text>
          </v-card>
          <v-card class="mx-auto" max-width="374">
            <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text class="mt-0">Name</v-card-text>
            <v-card-text class="mt-0">Year</v-card-text>
            <v-card-text class="mt-0">Genre</v-card-text>
          </v-card>
          <v-card class="mx-auto" max-width="374">
            <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text class="mt-0">Name</v-card-text>
            <v-card-text class="mt-0">Year</v-card-text>
            <v-card-text class="mt-0">Genre</v-card-text>
          </v-card>
          <v-card class="mx-auto" max-width="374">
            <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text class="mt-0">Name</v-card-text>
            <v-card-text class="mt-0">Year</v-card-text>
            <v-card-text class="mt-0">Genre</v-card-text>
          </v-card>
          <v-card class="mx-auto" max-width="374">
            <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-text class="mt-0">Name</v-card-text>
            <v-card-text class="mt-0">Year</v-card-text>
            <v-card-text class="mt-0">Genre</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "FilmsView",
  data: () => ({
    page: 1
  })
}
</script>

<style scoped>
aside {
  width: 300px;
  background: gray;
  min-height: 90vh;
}
</style>