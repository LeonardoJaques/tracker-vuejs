import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from "../views/Tarefas.vue";
import ProjetosApp from "../views/Projetos.vue";
import ListaApp from "../views/Projetos/Lista.vue";
import Formulario from "../views/Projetos/Formulario.vue";
const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tarefas",
    component: Tarefas,
  },
  {
    path: "/projetos",
    component: ProjetosApp,
    children: [
      {
        path: "",
        name: "Projeto ",
        component: ListaApp,
      },
      {
        path: "novo",
        name: "Novo projeto ",
        component: Formulario,
      },
      {
        path: ":id",
        name: "Editar Projetos",
        component: Formulario,
        props: true,
      },
    ],
  },
];

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default roteador;
