import BreedInfoView from "@/views/BreedInfoView.vue";
import TopBreeds from "@/views/TopBreeds.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/top",
      name: "top",
      component: TopBreeds,
    },
    {
      path: "/breed/:id",
      name: "breedInfo",
      component: BreedInfoView,
    },
  ],
});

export default router;
