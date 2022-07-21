import { INotificacoes } from "@/interfaces/INotificacao";
import { NOTIFICAR } from "./tipo-mutacoes";
import { EstadoDoProjeto, projeto } from "./modulos/projeto";
import { EstadoDaTarefa, tarefa } from "./modulos/tarefa";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

export interface Estado {
  notificacoes: INotificacoes[];
  projeto: EstadoDoProjeto;
  tarefa: EstadoDaTarefa;
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    notificacoes: [],
    projeto: {
      projetos: [],
    },
    tarefa: {
      tarefas: [],
    },
  },
  mutations: {
    [NOTIFICAR](state, novaNotificacao: INotificacoes) {
      novaNotificacao.id = new Date().getTime();
      state.notificacoes.push(novaNotificacao);
      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(
          (notificacao) => notificacao.id !== novaNotificacao.id
        );
      }, 3000);
    },
  },
  modules: {
    projeto,
    tarefa,
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
