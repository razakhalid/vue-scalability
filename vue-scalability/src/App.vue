<template>
  <div id="app">
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
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <v-main>
      <v-container fluid>
        <router-view :key="$route.fullPath" />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import api from "@/data/api";

export default {
  name: "App",
  async created() {
    const response = await api.reviews.getOne(1);
    console.log(response)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  //padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.d-flex { display: flex; }
</style>
