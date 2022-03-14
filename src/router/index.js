import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import MapView from "../views/MapView.vue";
import MarkedView from "../views/MarkedView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/map",
    name: "map",
    component: MapView,
  },
  {
    path: "/marked",
    name: "marked",
    component: MarkedView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
