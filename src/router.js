import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Pets from "./views/Pets.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/pets",
      name: "pets",
      component: Pets
    }
  ]
});
