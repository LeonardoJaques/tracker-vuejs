<template>
  <div class="projetos">
    <h1 class="title">Projetos</h1>
    <RouterView />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjetosApp",
});
</script>
<style scoped>
.projetos {
  padding: 1.25rem;
}
.title {
  color: #806a12;
}
</style>
