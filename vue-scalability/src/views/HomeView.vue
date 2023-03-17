<template>
  <div>

    <!--  JumbotronComponent  -->
    <div class="jumbotron">This is the static text of jumbotron</div>

    <!--  CarouselComponent  -->
    <v-card
        elevation="24"
        max-width="444"
        class="mx-auto"
    >
      <v-carousel
          v-model="carousel_model"
          class="mt-2 carousel"
          height="300"
      >
        <v-carousel-item
            v-for="(slide, i) in slides"
            :key="slide"
            :color="slide"
            class="carousel-item">
          <v-sheet :color="slides[i]" height="100%" tile>
            <v-row class="d-flex fill-height carousel-sheet" align="center" justify="center">
              <h2 class="text-h2">
                {{ slide }}
              </h2>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

    </v-card>

    <!--  ReportComponent  -->
    <div class="report-card-container">
      <v-card elevation="2" outlined shaped class="mt-2 mr-2 report-card">
        <v-card-title>card subtitle</v-card-title>
        <v-card-subtitle>some text</v-card-subtitle>
      </v-card>
      <v-card elevation="2" outlined shaped class="mt-2 mr-2 report-card">
        <v-card-title>card subtitle</v-card-title>
        <v-card-subtitle>some text</v-card-subtitle>
      </v-card>
      <v-card elevation="2" outlined shaped class="mt-2 mr-2 report-card">
        <v-card-title>card subtitle</v-card-title>
        <v-card-subtitle>some text</v-card-subtitle>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    carousel_model: 0,
    slides: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', '#7f00ff'],
  })
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