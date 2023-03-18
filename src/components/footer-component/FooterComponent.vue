<template>
  <v-container fluid>
    <component
        v-for="(item,index) in componentsList"
        :is="item.component"
        :key="`${item.component}_${index}`"
        :schema="item.schema"
    />
  </v-container>
</template>

<script>
export default {
  name: "FooterComponent",
  components: {
    FooterDefaultComponent: () => import ("@/components/footer-component/components/FooterDefaultComponent.vue"),
  },
  props: {
    components: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      componentsList: this.components,
    };
  },
}
</script>