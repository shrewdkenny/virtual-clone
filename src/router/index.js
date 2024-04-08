import { createRouter, createWebHistory } from "vue-router";
import Virtuals from "@/views/Virtuals.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Virtuals",
      component: Virtuals,
    },
  ],
});

export default router;
