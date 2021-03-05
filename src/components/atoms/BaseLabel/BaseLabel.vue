<template>
  <label :for="id">
    <slot />
  </label>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";

export default defineComponent({
  name: "BaseLabel",
  props: {
    id: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    return {
      props
    };
  }
});
</script>

<style scoped>
label {
  margin: 20px;
}
</style>
