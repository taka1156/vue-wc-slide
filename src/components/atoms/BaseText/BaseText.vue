<template>
  <div>
    <p class="base-text--extend">
      <!-- @slot テキスト -->
      <slot />
    </p>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "BaseText"
});
</script>

<style scoped>
/* css reset */
p {
  display: block;
  padding: 0;
  margin: 0;
}
/* css reset */
</style>
