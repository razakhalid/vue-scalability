<template>
  <v-container fluid class="ma-0 header-wrapper">
    <Component
        v-for="(item, index) in componentList"
        :is="item.component"
        :key="`${item.component}_${index}`"
        :schema="item.schema"
    ></Component>
  </v-container>
</template>

<script>
export default {
  name: "HeaderComponent",
  components: {
    AnnouncementComponent: () => import("@/components/header-component/components/AnnouncementComponent.vue"),
    HeaderButtonsComponent: () => import("@/components/header-component/components/HeaderButtonsComponent.vue"),
  },
  props: {
    components: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      componentList: this.components
    }
  }
}
</script>

<style scoped>

</style>