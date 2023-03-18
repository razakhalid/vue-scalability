<template>
  <div>
    <v-progress-circular
        v-if="loading"
        indeterminate
        color="primary">
    </v-progress-circular>
    <div v-if="!loading">
      <ProductsTemplate
          v-if="template === 'products'"
          :data="data"
      ></ProductsTemplate>

      <UsersTemplate
          v-else-if="template === 'users'"
          :data="data"
      >
      </UsersTemplate>

      {{template}}
    </div>
  </div>
</template>

<script>
import ProductsTemplate from "@/components/list-view-component/components/ProductsTemplate.vue";
import UsersTemplate from "@/components/list-view-component/components/UsersTemplate.vue";
import api from "@/data/api";

export default {
  name: "ListViewComponent",
  props: {
    template: {
      type: String,
      default: "products"
    },
    service: {
      type: String
    }
  },
  data() {
    return {
      data: [],
      loading: false
    }
  },
  async created() {
    // 1. Check for route params
    const config = {
      params: {
        ...this.$route.query
      }
    };

    // 2. API call for service
    this.loading = true;
    this.data = await api[this.service].getAll(config);
    this.loading = false;
  },
  components: {
    ProductsTemplate,
    UsersTemplate
  }
}
</script>

<style scoped>

</style>