import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/homeLoad.vue"),
    },
    {
      path: "/postload",
      name: "postload",
      component: () => import("../views/postLoad.vue"),
    },
    {
      path: "/searchtrucks",
      name: "searchtrucks",
      component: () => import("../views/searchTrucks.vue"),
    },
    {
      path: "/posttrucks",
      name: "posttrucks",
      component: () => import("../views/postTrucks.vue"),
    },
    {
      path: "/searchloads",
      name: "searchloads",
      component: () => import("../views/searchLoads.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login.vue"),
    },
  ],
});

export default router;
