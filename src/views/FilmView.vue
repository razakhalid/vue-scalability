
<template>
  <v-container class="pa-0" fluid>
    <div>id: {{ $route.params.id }}</div>
    <!--  FilmAvatarComponent  -->
    <v-avatar rounded size="200">
      <v-img
          src="https://www.shutterstock.com/image-photo/daniel-craig-red-carpet-arrivals-260nw-338642066.jpg"
      />
    </v-avatar>
    <!--  FilmDescriptionComponent  -->
    <p>This is film description</p>
    <!--  FilmReviewComponent  -->
    <div>
      <b>This is film comment</b>
      <v-rating length="5" size="20" :value="3" readonly/>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "FilmView"
}
</script>

<style scoped>

</style>