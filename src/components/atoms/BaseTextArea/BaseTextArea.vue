<template>
  <textarea
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :value="value"
    @input="updateValue"
    class="base-text-area--extend"
  ></textarea>
</template>

<script lang="ts">
import { defineComponent, SetupContext, PropType } from "@vue/composition-api";

export default defineComponent({
  name: "BaseTextArea",
  props: {
    id: {
      type: String as PropType<string>,
      required: true
    },
    name: {
      type: String as PropType<string>,
      required: true
    },
    value: {
      type: String as PropType<string>,
      required: true
    },
    placeholder: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props, context: SetupContext) {
    const updateValue = (e: Event): void => {
      // HTMLInputElement => ×
      if (e.target instanceof HTMLTextAreaElement) {
        context.emit("update:value", e.target.value);
      }
    };
    return { updateValue, props };
  }
});
</script>

<style scoped>
textarea {
  display: block;
  padding: 0;
  margin: 0;
  resize: none;
  outline-color: cornflowerblue;
}
</style>
