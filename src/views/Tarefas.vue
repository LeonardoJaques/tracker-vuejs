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
  <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import ITarefa from "../interfaces/ITarefas";
import FormularioApp from "../components/Formulario.vue";
import TarefaApp from "../components/Tarefa.vue";
import Box from "../components/Box.vue";
import { useStore } from "@/store";
import { store } from "@/store";
import {
  OBTER_TAREFAS,
  CADASTRAR_TAREFA,
  OBTER_PROJETOS,
} from "@/store/tipo-acoes";

export default defineComponent({
  name: "App",
  components: { FormularioApp, TarefaApp, Box },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.store.dispatch(CADASTRAR_TAREFA, tarefa);
    },
  },
  computed: {
    semTarefas(): boolean {
      return this.tarefas.length === 0;
    },
  },
  setup() {
    const store = useStore();
    store.dispatch(OBTER_TAREFAS);
    store.dispatch(OBTER_PROJETOS);
    return {
      tarefas: computed(() => store.state.tarefas),
      store,
    };
  },
});
</script>
