<template>
  <div class="d-flex">
    <aside class="px-2 white--text">

      <!--   Almost Dumb Component   -->
      <FilterComponent
          :schema="getFilterComponentSchema"
      ></FilterComponent>

    </aside>

    <v-container class="pa-0">
      <v-row class="ml-2">
        <v-col cols="9">

          <!--     Almost Dumb Component     -->
          <SearchComponent
          ></SearchComponent>

          <v-col cols="3" class="align-self-center">
            <v-pagination :length="4" circle></v-pagination>
          </v-col>

        </v-col>
      </v-row>

      <!--   Single Responsible Component   -->
      <ListViewComponent
          service="products"
          template="products"
      ></ListViewComponent>
      <ListViewComponent
          service="users"
          template="users"
      ></ListViewComponent>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SearchComponent from "@/components/search-component/SearchComponent.vue";
import FilterComponent from "@/components/filter-component/FilterComponent.vue";
import ListViewComponent from "@/components/list-view-component/ListViewComponent.vue";

export default {
  name: "FilmsView",
  data: () => ({
    page: 1
  }),
  computed: {
    ...mapGetters("appSchema", ["getFilterComponentSchema"])
  },
  components: {
    SearchComponent,
    FilterComponent,
    ListViewComponent
  }
}
</script>

<style scoped>
aside {
  width: 300px;
  background: gray;
  min-height: 90vh;
}
</style>