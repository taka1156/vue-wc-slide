<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <SlideArea class="slide" :md-text="TEST_MARKDOWN" />
    <SlideAreaIt class="slide" :md-text="TEST_MARKDOWN" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import SlideArea from "@/components/organisms/SlideArea/SlideArea.vue";
import SlideAreaIt from "@/components/organisms/SlideArea/SlideAreaIt.vue";
import { TEST_MARKDOWN } from "@/constants/index";

export default defineComponent({
  components: {
    SlideArea,
    SlideAreaIt
  },
  setup() {
    return {
      TEST_MARKDOWN
    };
  }
});
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

.slide {
  margin: 30px;
}
</style>
