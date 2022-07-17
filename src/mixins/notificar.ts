import { TipoNotificaco } from "@/interfaces/INotificacao";
import { store } from "@/store";
import { NOTIFICAR } from "@/store/tipo-mutacoes";

export const notificacaoMixin = {
  methods: {
    notificar(tipo: TipoNotificaco, titulo: string, texto: string) {
      store.commit(NOTIFICAR, {
        titulo,
        texto,
        tipo,
      });
    },
  },
};
