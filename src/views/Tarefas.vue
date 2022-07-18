<template>
  <FormularioApp @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <Box v-if="listaEstaVazia"> Você não esta muito produtivo hoje :( </Box>
    <TarefaApp
      v-for="(tarefa, index) in tarefas"
      :key="index"
      :tarefa="tarefa"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FormularioApp from "../components/Formulario.vue";
import TarefaApp from "../components/Tarefa.vue";
import ITarefa from "../interfaces/ITarefas";
import Box from "../components/Box.vue";

export default defineComponent({
  name: "App",
  components: { FormularioApp, TarefaApp, Box },
  data() {
    return {
      tarefas: [] as ITarefa[],
    };
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
  },
});
</script>
