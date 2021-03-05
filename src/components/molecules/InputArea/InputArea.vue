<template>
  <div>
    <base-label :id="`input-md`">
      INPUT
    </base-label>
    <base-text-area
      :id="`input-md`"
      :name="`input-md`"
      :value="state.mdText"
      :placeholder="sampleText"
      @update:value="updateText"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, reactive, onMounted } from "@vue/composition-api";
import BaseLabel from "../../atoms/BaseLabel/BaseLabel.vue";
import BaseTextArea from "../../atoms/BaseTextArea/BaseTextArea.vue";
import { PLACEHOLDER_MARKDOWN as sampleText } from "@/constants/index";

type InputState = {
  mdText: string;
};

export default defineComponent({
  name: "InputArea",
  components: {
    "base-label": BaseLabel,
    "base-text-area": BaseTextArea
  },
  setup(props, context: SetupContext) {
    const state = reactive<InputState>({
      mdText: ""
    });

    const updateText = (text = "") => {
      const mdText = text !== "" ? text : sampleText;
      context.emit("update-text", mdText);
    };

    // mounted
    onMounted(() => {
      updateText();
    });

    return { state, updateText, sampleText };
  }
});
</script>

<style scoped>
:deep(.base-text-area--extend) {
  width: 40vw;
  height: 470px;
  margin: 1px;
  border: 1px solid gray;
}
</style>
