<template>
  <div class="d-flex flex-column">
    <b class="d-inline-block">{{ filmName }}</b>
    <v-avatar rounded size="200">
      <v-img
          :src="avatar"
      />
    </v-avatar>
  </div>
</template>

<script>
export default {
  name: "AvatarComponent",
  props: {
    avatar: {
      type: String,
      default: null,
    },
    filmName: {
      type: String,
      default: null,
    }
  }
}
</script>