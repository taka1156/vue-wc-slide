<template>
  <div class="slide-ui">
    <base-btn @btn-click="prevPage">&lt;</base-btn>
    <base-btn @btn-click="nextPage">&gt;</base-btn>
    <base-btn @btn-click="expandSlide">「」</base-btn>
    {{ maxPage - (maxPage - currentPage - 1) }}/{{ maxPage }}
    <base-input-range
      :value="currentPage"
      :min="0"
      :max="maxPage - 1"
      :step="1"
      @update:value="changePage"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, PropType } from "@vue/composition-api";
import BaseBtn from "../../atoms/BaseBtn/BaseBtn.vue";
import BaseInputRange from "../../atoms/BaseInputRange/BaseInputRange.vue";

export default defineComponent({
  name: "SliderUi",
  components: {
    "base-btn": BaseBtn,
    "base-input-range": BaseInputRange
  },
  props: {
    currentPage: {
      type: Number as PropType<number>,
      required: true
    },
    maxPage: {
      type: Number as PropType<number>,
      required: true
    }
  },
  setup(props, context: SetupContext) {
    // methods
    const prevPage = () => {
      context.emit("prev-page");
    };

    const nextPage = (): void => {
      context.emit("next-page");
    };

    const changePage = (index: number): void => {
      context.emit("change-page", index);
    };

    const expandSlide = () => {
      context.emit("expand-slide");
    };

    return {
      props,
      prevPage,
      nextPage,
      changePage,
      expandSlide
    };
  }
});
</script>

<style scoped>
.slide-ui {
  display: flex;
  justify-content: space-around;
  padding: 0;
  background-color: white;
  border: 0.2px solid gray;
}
</style>
