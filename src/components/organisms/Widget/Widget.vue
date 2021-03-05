<template>
  <div>
    <slide-area :md-text="md" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "@vue/composition-api";
import SlideArea from "@/components/organisms/SlideArea/SlideArea.vue";
import { PLACEHOLDER_MARKDOWN as sampleText } from "@/constants/index";

export default defineComponent({
  name: "Widget",
  components: {
    "slide-area": SlideArea
  },
  props: {
    md: {
      type: String as PropType<string>
    }
  },
  setup(props) {
    const mdText = computed(() => {
      return props.md || sampleText;
    });

    return { mdText };
  }
});
</script>
