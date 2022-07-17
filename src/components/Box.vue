<template>
  <div class="box has-text-weight-bold" :style="estilos">
    <slot></slot>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoxApp",
  data() {
    return {
      estilos: {
        backgroundColor: "#faf0ca",
      },
    };
  },
});
</script>
