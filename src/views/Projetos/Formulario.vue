<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjet"
        />
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
import { defineComponent, ref } from "vue";
import useNotificador from "../../hooks/notificador";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "FormularioProjetos",
  props: {
    id: { type: String },
  },
  setup(props) {
    const store = useStore();
    const { notificar } = useNotificador();
    const router = useRouter();
    const nomeDoProjeto = ref("");

    if (props.id) {
      const projeto = store.state.projeto.projetos.find(
        (proj) => proj.id == props.id
      );
      nomeDoProjeto.value = projeto?.nome || "";
    }

    const lidarComSucesso = () => {
      nomeDoProjeto.value = "";
      notificar(
        TipoNotificaco.SUCESSO,
        "Exelente",
        "O projeto foi cadastrado com sucesso!"
      );
      router.push("/projetos");
    };
    const lidarComFalha = () => {
      notificar(
        TipoNotificaco.FALHA,
        "Falhou",
        "O projeto falhou ao cadrastar!"
      );
    };
    const salvar = () => {
      if (props.id) {
        store
          .dispatch(ALTERAR_PROJETO, {
            id: props.id,
            nome: nomeDoProjeto.value,
          })
          .then(() => lidarComSucesso())
          .catch(() => lidarComFalha());
      } else {
        store
          .dispatch(CADASTRAR_PROJETO, nomeDoProjeto.value)
          .then(() => lidarComSucesso())
          .catch(() => lidarComFalha());
      }
    };

    return {
      nomeDoProjeto,
      salvar,
    };
  },
});
</script>
<style scoped>
.label {
  color: #806a12;
}
</style>
