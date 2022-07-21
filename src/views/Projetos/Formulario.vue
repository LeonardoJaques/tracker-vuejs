<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">
          Nome do Projeto
          <input
            type="text"
            class="input"
            v-model="nomeDoProjeto"
            id="nomeDoProjeto"
          />
        </label>
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { TipoNotificaco } from "@/interfaces/INotificacao";
import { useStore } from "@/store";
import { CADASTRAR_PROJETO, ALTERAR_PROJETO } from "@/store/tipo-acoes";
import { defineComponent } from "vue";
import useNotificador from "../../hooks/notificador";

export default defineComponent({
  name: "FormularioProjetos",
  props: {
    id: { type: String },
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projeto.projetos.find(
        (proj) => proj.id === this.id
      );
      this.nomeDoProjeto = projeto?.nome || "";
    }
  },
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store
          .dispatch(ALTERAR_PROJETO, {
            id: this.id,
            nome: this.nomeDoProjeto,
          })
          .then(() => this.lidarComSucesso())
          .catch(() => this.lidarComFalha());
      } else {
        this.store
          .dispatch(CADASTRAR_PROJETO, this.nomeDoProjeto)
          .then(() => this.lidarComSucesso())
          .catch(() => this.lidarComFalha());
      }
      this.$router.push("/projetos");
    },
    lidarComSucesso() {
      this.nomeDoProjeto = "";
      this.notificar(
        TipoNotificaco.SUCESSO,
        "Exelente",
        "O projeto foi cadastrado com sucesso!"
      );
    },
    lidarComFalha() {
      this.notificar(
        TipoNotificaco.FALHA,
        "Falhou",
        "O projeto falhou ao cadrastar!"
      );
    },
  },
  setup() {
    const store = useStore();
    const { notificar } = useNotificador();
    return {
      store,
      notificar,
    };
  },
});
</script>
<style scoped>
.label {
  color: #806a12;
}
</style>
