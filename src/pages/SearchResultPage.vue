<template>


    <div class="header">
      <button @click="backEvent" class="btn back-btn">
        <img :src="back" alt="Back" />
      </button>
      <h1>Search Results</h1>
    </div>

    <Loading v-if="isLoading" />
    <div class="result-container">
      <PokemonCard v-if="!isLoading && hasResult" :pokemon="pokemon" />
      <p v-if="!isLoading && !hasResult && !!error">No Pokémon found. Try searching again!</p>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, watch, watchEffect } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { searchPokemonApi } from "../services/api";
  import Loading from "../components/Loading.vue";
  import PokemonCard from "../components/PokemonCard.vue";
  import back from "../assets/left_arrow.svg";

  /* State Variables */
  const route = useRoute();
  const router = useRouter();
  const params = ref(null);
  const pokemon = reactive({});
  const hasResult = ref(false);
  const isLoading = ref(false);
  const error = ref("");
  
  /* Function to Fetch Pokémon Based on Query */
  const fetchSearchPokemon = async () => {
    try {
      const { searchBy, searchQuery } = params.value || {};
      if (searchBy && searchQuery) {
        isLoading.value = true;
        const params=`${searchBy}/${searchQuery}`
        const res = await searchPokemonApi(params); // Use actual query
        hasResult.value = !!Object.keys(res).length; // Check if Pokémon was found
        Object.assign(pokemon, res); // Update reactive `pokemon` object
      }
    } catch (err) {
      hasResult.value=false
      error.value = err.message || "Failed to fetch Pokémon data.";
    } finally {
      isLoading.value = false;
    }
  };

    /* Watch for Route Changes */
    watchEffect(() => {
    params.value = route.query; // Sync route query params
    fetchSearchPokemon();
  });

  function backEvent() {
    router.go(-1);
  }

  </script>
  
  <style scoped>
    .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: #f5f5f5;
  }
  p {
    color: #666;
    font-style: italic;
  }
  .result-container{
    display: flex;
    justify-content: center;
  }
  .btn{
    background-color: transparent;
    
  }
  </style>
