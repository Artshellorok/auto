import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Register from "./views/Register.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/reg",
      name: "Регистрация",
      component: Register
    },
    {
      path: "/",
      name: "Автомойки",
      component: Home
    }
  ],
  mode: "hash"
});
