<template>
  <input
    type="range"
    :value="value"
    :min="min"
    :max="max"
    :step="step"
    @change="updateValue"
    class="base-range--extend"
  />
</template>

<script lang="ts">
import { defineComponent, PropType, SetupContext } from "@vue/composition-api";

export default defineComponent({
  name: "BaseInputRange",
  props: {
    value: {
      type: Number as PropType<number>,
      required: true
    },
    min: {
      type: Number as PropType<number>,
      required: true
    },
    max: {
      type: Number as PropType<number>,
      required: true
    },
    step: {
      type: Number as PropType<number>,
      required: true
    }
  },
  setup(props, context: SetupContext) {
    const updateValue = (e: Event): void => {
      if (e.target instanceof HTMLInputElement) {
        context.emit("update:value", e.target.value);
      }
    };
    return { updateValue, props };
  }
});
</script>

<style scoped>
input[type="range"] {
  width: 70%;
}

input[type="range"]::-webkit-slider-thumb {
  background-color: cornflowerblue;
}
</style>
