<template>
  <div class="wrapper" v-show="isOpen"></div>
</template>

<script>
export default {
  name: "common-dropdown",

  props: {
    isOpen: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.wrapper {
  width: 200px;
  height: 250px;
  background: #ccc;
}
</style>
