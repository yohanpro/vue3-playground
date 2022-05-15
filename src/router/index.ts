import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyView from "../pages/my/index.vue";
import MyDetailView from "../pages/my/detail/index.vue";
import CountView from "../views/CountView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/count",
    name: "count",
    component: () => import("../views/CountView.vue"),
  },
  {
    path: "/my",
    name: "my",
    component: MyView,
  },
  {
    path: "/my/:id",
    name: "myDetail",
    component: MyDetailView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
