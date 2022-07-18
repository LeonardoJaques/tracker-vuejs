<template>
  <FormularioApp @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <Box v-if="semTarefas"> Você não esta muito produtivo hoje :( </Box>
    <TarefaApp
      v-for="(tarefa, index) in tarefas"
      :key="index"
      :tarefa="tarefa"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import FormularioApp from "../components/Formulario.vue";
import TarefaApp from "../components/Tarefa.vue";
import Box from "../components/Box.vue";
import { useStore } from "@/store";
import { OBTER_TAREFAS } from "@/store/tipo-acoes";


export default defineComponent({
  name: "App",
  components: { FormularioApp, TarefaApp, Box },
  methods: {
    // salvarTarefa(tarefa: ITarefa) {
    //   this.tarefas.push(tarefa);
    // },
  },
  computed: {
    semTarefas(): boolean {
      return this.tarefas.length === 0;
    },

  },
  setup() {
      const store = useStore();
      store.dispatch(OBTER_TAREFAS);
      return {
        tarefas: computed(() => store.state.tarefas),
        store,
      };
    },
});
</script>
