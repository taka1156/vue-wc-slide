<template>
  <div>
    <base-text>Preview</base-text>
    <div class="preview-area preview-area--expand">
      <div class="markdown-body" v-html="markedValue"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "@vue/composition-api";
import BaseText from "../../atoms/BaseText/BaseText.vue";
import { md } from "@/plugins/MarkdownIt";
import "github-markdown-css";

export default defineComponent({
  name: "PreviewArea",
  components: {
    "base-text": BaseText
  },
  props: {
    mdText: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    const markedValue = computed(() => {
      const nl2brText = `${props.mdText}`.replace(/\\n/g, "<br/>");
      return md.render(nl2brText);
    });
    return {
      props,
      markedValue
    };
  }
});
</script>

<style scoped>
.preview-area {
  width: 100%;
  height: 470px;
  margin: 1px;
  overflow-y: scroll;
  background-color: white;
  border: 1px solid gray;
}

.markdown-body {
  width: 95%;
  margin: 0 auto;
  text-align: left;
}
</style>
