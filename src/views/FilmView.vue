<template>
  <div>
    <v-container class="pa-0" fluid>
      <!--   FilmAvatarComponent   -->
      <v-avatar rounded size="200">
        <v-img
        ></v-img>
      </v-avatar>

      <!--   FilmDescriptionComponent   -->
      <p>This is film description</p>

      <!--   FilmReviewComponent   -->
      <div>
        <b>This is film comment</b>
        <v-rating length="5" size="20" :value="3"></v-rating>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "FilmView"
}
</script>

<style scoped>

</style>