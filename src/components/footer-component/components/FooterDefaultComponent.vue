<template>
  <footer>
    <v-row no-gutters>
      <v-col v-for="(value, key, index) in content" :key="index">
        <div class="blue--text">{{ key }}</div>
        <div v-for="(item, value_index) in value" :key="value_index">
          <router-link class="white--text" :to="{ name: `${item.link}` }">{{
              item.title
            }}
          </router-link>
        </div>
      </v-col>
    </v-row>
  </footer>
</template>

<script>
export default {
  name: "FooterDefaultComponent",
  props: {
    schema: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      content: this.schema
    }
  }
};
</script>
<style scoped>
footer {
  background: grey;
  padding: 1rem;
}
</style>