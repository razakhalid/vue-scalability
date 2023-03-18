<template>
  <div id="app">


    <HeaderComponent class="mt-15" :components="getAppHeaderComponentsSchema"></HeaderComponent>

    <v-main>
      <v-container fluid>
        <router-view :key="$route.fullPath" />
      </v-container>
    </v-main>

    <FooterComponent class="mt-15" :components="getAppFooterComponentSchema"></FooterComponent>
  </div>
</template>

<script>
import api from "@/data/api";
import {mapGetters} from "vuex";
import HeaderComponent from "@/components/header-component/HeaderComponent.vue";
import FooterComponent from "@/components/footer-component/FooterComponent.vue";

export default {
  name: "App",
  computed: {
    ...mapGetters("appSchema", ["getAppHeaderComponentsSchema", "getAppFooterComponentSchema"])
  },
  components: {
    HeaderComponent,
    FooterComponent
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
