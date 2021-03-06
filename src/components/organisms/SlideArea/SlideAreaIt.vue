<template>
  <div id="expand">
    <preview-area-it :md-text="slide" />
    <slider-ui
      :current-page="state.page"
      :max-page="maxPage"
      @prev-page="prevPage"
      @next-page="nextPage"
      @change-page="changePage"
      @expand-slide="expandSlide"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, computed } from "@vue/composition-api";
import PreviewAreaIt from "../../molecules/PreviewArea/PreviewAreaIt.vue";
import SliderUi from "../../molecules/SliderUi/SliderUi.vue";
import { PLACEHOLDER_MARKDOWN as sampleText } from "@/constants/index";

type State = {
  page: number;
  isExpand: boolean;
};

interface ElementWithFullscreen extends HTMLElement {
  webkitRequestFullscreen?: () => void;
  webkitExitFullscreen?: () => void;
  exitFullscreen?: () => void;
}

export default defineComponent({
  name: "SlideArea",
  components: {
    "preview-area-it": PreviewAreaIt,
    "slider-ui": SliderUi
  },
  props: {
    mdText: {
      type: String as PropType<string>,
      default: sampleText
    }
  },
  setup(props) {
    // data
    const state = reactive<State>({
      page: 0,
      isExpand: false
    });

    //computed
    const slidesRef = computed(() => {
      const slideText: string = props.mdText;
      return slideText.split(/^---|\*\*\*$/gm);
    });

    const maxPage = computed((): number => {
      const slides = slidesRef.value;
      if (slides.length === 0) return 0;
      return slides.length;
    });

    const slide = computed((): string => {
      const slides = slidesRef.value;
      if (slides.length === 0) return "";
      return slides[state.page];
    });

    //methods

    const prevPage = () => {
      const slides = slidesRef.value;
      if (slides.length === 0) state.page = 0;
      if (state.page === 0) {
        state.page = maxPage.value - 1;
      } else {
        state.page = Math.max(state.page - 1, 0);
      }
    };

    const nextPage = (): void => {
      const slides = slidesRef.value;
      if (slides.length === 0) state.page = 0;
      if (state.page === maxPage.value - 1) {
        state.page = 0;
      } else {
        state.page = Math.min(state.page + 1, maxPage.value - 1);
      }
    };

    const changePage = (index: number) => {
      state.page = index;
    };

    // スライドのフルスクリーン化
    const expandSlide = (): void => {
      state.isExpand = !state.isExpand;
      const expandEl = document.getElementById("expand") as ElementWithFullscreen;
      if (state.isExpand) {
        if (expandEl.webkitRequestFullscreen) {
          expandEl.webkitRequestFullscreen();
          state.isExpand = true;
        }
      } else {
        if (expandEl.webkitExitFullscreen) {
          expandEl.webkitExitFullscreen();
          state.isExpand = false;
        }
      }
    };

    return {
      state,
      maxPage,
      slide,
      prevPage,
      nextPage,
      changePage,
      expandSlide
    };
  }
});
</script>

