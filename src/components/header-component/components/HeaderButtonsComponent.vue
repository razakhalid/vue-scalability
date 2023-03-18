<template>
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img

        />
      </div>

      <v-btn exact :to="{ name: 'HomeView' }" text>
        <span class="mr-2">Home</span>
      </v-btn>

      <v-btn exact :to="{ name: 'FilmsView' }" text>
        <span class="mr-2">Films</span>
      </v-btn>

      <v-btn exact :to="{ name: 'AdminView' }" text>
        <span class="mr-2">Admin</span>
      </v-btn>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "HeaderButtonsComponent"
}
</script>

<style scoped>

</style>