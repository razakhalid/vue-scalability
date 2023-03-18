<template>
  <div>

    <Component
        v-for="(item, index) in getHomePageComponentsSchema"
        :is="item.component"
        :key="`${item.component}_${index}`"
        :schema="item.schema"
    ></Component>

    <!--  ReportComponent  -->
    <div class="report-card-container">

    </div>
  </div>
</template>

<script>
import JumbotronComponent from "@/components/jumbotron-component/JumbotronComponent.vue";
import CarouselComponent from "@/components/carousel-component/CarouselComponent.vue";
import ReportComponent from "@/components/report-component/ReportComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  computed: {
    ...mapGetters("appSchema", ["getHomePageComponentsSchema"])
  },
  components: {
    JumbotronComponent,
    ReportComponent,
    CarouselComponent
  }
}
</script>

<style scoped lang="scss">
.jumbotron {
  height: 150px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: cadetblue;
  color: white;
  margin: 30px 0;
}
.mx-auto {
  max-width: 100% !important;
}
.text-h2 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.report-card-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 30px;
  padding: 30px;
}
</style>