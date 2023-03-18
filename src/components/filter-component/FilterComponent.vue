<template>
  <div class="pa-5">
    <div
        v-for="(item, index) in filters" :key="`${item}_${index}`"
    >
      <template v-if="item.type === 'switch'">
        <v-switch
            v-model="item.value"
            :label="item.label"
            @change="onInput($event, item.filterName)"
        >
        </v-switch>
      </template>
      <template v-if="item.type === 'text'">
        <v-text-field
            solo
            v-model="item.value"
            :label="item.label"
            @input="onInput($event, item.filterName)"
        ></v-text-field>
      </template>
      <template v-if="item.type === 'select'">
        <v-select
            solo
            :items="[item.items]"
            :label="item.label"
            @input="onInput($event, item.filterName)"
        ></v-select>
      </template>
    </div>
    <v-btn color="primary" @click="onApplyClicked">Apply</v-btn>
    <v-btn color="white" @click="onResetClicked">Reset</v-btn>
  </div>
</template>

<script>
export default {
  name: "FilterComponent",
  props: {
    schema: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      filters: JSON.parse(JSON.stringify(this.schema)),
      appliedFilters: {}
    }
  },
  methods: {
    onInput(value, filterName) {
      this.appliedFilters[filterName] = value;
    },
    onApplyClicked() {
      if (Object.keys(this.appliedFilters.length)) return;
      this.$router.push({
        query: {
          ...this.appliedFilters
        }
      });
    },
    onResetClicked() {
      if (!Object.keys(this.$route.query).length) return;
      this.$router.push({
        query: {}
      })
    }
  }
}
</script>

<style scoped>

</style>