<template>
  <BoxApp>
    <div class="columns clicavel" @click="tarefaClicada">
      <div class="column is-4">
        {{ tarefa?.descricao || "Taréfa sem descrição" }}
      </div>
      <div class="column is-3">{{ tarefa?.projeto?.nome || "N/D" }}</div>
      <div class="column">
        <CronometroApp :tempo-em-segundos="tarefa?.duracaoEmSegundos" />
      </div>
    </div>
  </BoxApp>
</template>
<script lang="ts">
import CronometroApp from "./Cronometro.vue";
import { defineComponent, PropType } from "vue";
import ITarefa from "@/interfaces/ITarefas";
import BoxApp from "./Box.vue";

export default defineComponent({
  name: "TarefaApp",
  emits: ["aoTarefaClicada"],
  components: { CronometroApp, BoxApp },
  methods: {
    tarefaClicada(): void {
      this.$emit("aoTarefaClicada", this.tarefa);
    },
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      require: true,
    },
  },
});
</script>

<style scoped>
.clicavel {
  cursor: pointer;
}
</style>
