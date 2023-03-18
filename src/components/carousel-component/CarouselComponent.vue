<template>
  <v-carousel v-model="carousel_model" class="mt-2" height="500">
    <v-carousel-item
        v-for="(slide, index) in slides"
        :key="`${slide.id}_${index}`"
    >
      <v-sheet color="green" height="100%" tile>
        <v-row align="center" justify="center" class="flex-column">
          <span class="text-h2 pt-2">{{ slide.title }}</span>
          <v-img :src="slide.img" width="100%" contain></v-img>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "CarouselComponent",
  props: {
    schema: {
      default: [],
      type: Array
    },
  },
  data() {
    return {
      carousel_model: 0,
      slides: this.schema
    }
  }
}
</script>