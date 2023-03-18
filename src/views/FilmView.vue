
<template>
  <v-container class="pa-0" fluid>

    <!--  AvatarComponent  -->
    <AvatarComponent
        :avatar="data.image"
        :film-name="data.name"
        class="mb-5"
    ></AvatarComponent>

    <!--  FilmDescriptionComponent  -->
    <DescriptionComponent
        :description="data.description"
    ></DescriptionComponent>

    <!--  ReviewComponent  -->
    <ReviewComponent
        v-for="(review, index) in reviews"
        :rate="review.rating"
        :comment="review.comment"
        :key="index"
    ></ReviewComponent>

    <div>
      <b>This is film comment</b>
      <v-rating length="5" size="20" :value="3" readonly/>
    </div>
  </v-container>
</template>

<script>
import api from "@/data/api";
import AvatarComponent from "@/components/avatar-component/AvatarComponent.vue";
import ReviewComponent from "@/components/review-component/ReviewComponent.vue";
import DescriptionComponent from "@/components/description-component/DescriptionComponent.vue";

export default {
  name: "FilmView",
  data() {
    return {
      data: null,
      reviews: [],
      loading: true
    }
  },
  async created() {
    this.loading = true;

    // get product name and description
    const { id } = this.$route.params;
    this.data = await api.products.getOne(id);

    // get reviews
    const config = {
      params: {
        productId: id
      }
    };

    this.reviews = await api.reviews.getAll(config);
    this.loading = false;
  },
  components: {
    DescriptionComponent,
    ReviewComponent,
    AvatarComponent
  }
}
</script>

<style scoped>

</style>