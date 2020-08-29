import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/Home/HomePage.vue";
import CreateClient from "../components/SingUp/CreateClient.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/createClient",
      name: "CreateNewClient",
      component: CreateClient,
    },
    // {
    //     path: "/fontes/:cod_interno/reparos",
    //     name: "reparos",
    //     component: ReparosTable,
    //     meta: {
    //         title: route => `Todos os reparos da fonte "${route.params.cod_interno}"`
    //     } ,

    // },
    // {
    //     path: "/fontes",
    //     name: "fontes",
    //     component: HomePage,
    //     meta: { title: "Todas as fontes" }
    // },

    // {
    //     path: "/new",
    //     name: "novo",
    //     component: ConcertoForm,
    //     meta: { title: "Novo registro" }
    // }
  ],
  mode: "history",
});
