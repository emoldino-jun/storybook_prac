<template>
  <div id="app">
    <cta-button
      :active="activeProps"
      :disabled="disabledProps"
      :color-type="colorTypeProps"
      :button-type="buttonTypeProps"
      :size="sizeProps"
      >{{ inputText }}</cta-button
    >
  </div>
</template>

<script>
import CtaButton from "./stories/cta-button.vue";

export default {
  name: "App",
  components: {
    CtaButton,
  },
  data() {
    return {
      inputText: "text",
      activeProps: false,
      disabledProps: false,
      colorTypeProps: "",
      buttonTypeProps: "",
      sizeProps: "",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
