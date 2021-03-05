<template>
  <div>
    <button class="base-btn--extend" @click="btnClick">
      <!-- @slot ボタンラベル -->
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "@vue/composition-api";

export default defineComponent({
  setup(props, context: SetupContext) {
    const btnClick = () => {
      context.emit("btn-click");
    };
    return {
      btnClick
    };
  }
});
</script>

<style scoped>
/* css reset */
button {
  padding: 0;
  margin: 0;
  cursor: pointer;
  width: 80px;
  height: 25px;
  margin: 5px;
  font-size: 15px;
  color: gray;
  line-height: 20px;
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 5px;
  outline-color: cornflowerblue;
}
/* css reset */

button:hover,
button:focus,
button:active {
  color: cornflowerblue;
  border: 1px solid cornflowerblue;
}
</style>
