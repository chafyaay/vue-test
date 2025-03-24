import { createRouter, createWebHistory } from "vue-router";

import PokemonListPage from "./pages/PokemonListPage.vue";
import SearchResultPage from "./pages/SearchResultPage.vue";
import PokemonDetailsPage from "./pages/PokemonDetailsPage.vue";

const routes = [
  { path: "/", name: "/", component: PokemonListPage },
  {
    path: "/pokemon-details/:id",
    name: "pokemon-details",
    component: PokemonDetailsPage,
  },
  { path: "/search", name: "search-page", component: SearchResultPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
