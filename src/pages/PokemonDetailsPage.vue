
<template>
    <div class="header">
      <button @click="backEvent" class="btn back-btn">
        <img :src="back" alt="Back" />
      </button>
      <h1>Pokémon Details</h1>
    </div>
    <Loading v-if="isLoading" />
    <p v-if="!isLoading && !hasResult && !!error">No Pokémon found. Try searching again!</p>
  
    <div v-if="!isLoading && hasResult"  class="card" @click="navigateEvent">
      <img :src="pokemon?.sprites?.other['official-artwork'].front_default" alt="Pokémon Image" class="card-image" />
      <div class="card-body">
        <h3 class="card-title">{{ pokemon?.name }}</h3>
        <p class="card-text"><strong>Height:</strong> {{ pokemon?.height }} m</p>
        <p class="card-text"><strong>Weight:</strong> {{ pokemon?.weight }} kg</p>
  
        <div class="card-abilities">
          <strong>Abilities:</strong>
          <ul>
            <li v-for="(ability, index) in pokemon?.abilities" :key="index" v-show="ability?.is_hidden">
              {{ ability?.ability?.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute, useRouter } from 'vue-router';
  import { defineProps,watchEffect,reactive,ref } from 'vue';
  import back from "../assets/left_arrow.svg";
  import { searchPokemonApi } from "../services/api";
  import Loading from "../components/Loading.vue";


  const route = useRoute();
  const router = useRouter();
  
  const pokemon = reactive({});
  const hasResult = ref(false);
  const isLoading = ref(false);
  const error = ref("");
  const params = ref("");

    /* Function to Fetch Pokémon Based on Query */
    const fetchSearchPokemon = async (id) => {
    try {
      if (id) {
        isLoading.value = true;
        const params=`pokemon/${id}`
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
    params.value = route.path.split("/").pop(); 
    fetchSearchPokemon(params.value);
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
  
  .back-btn {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  .card {
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 1rem auto;
    width: 100%;
    max-width: 400px;
    background-color: #fff;
  }
  
  .card-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .card-body {
    padding: 1rem 0;
  }
  
  .card-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .card-text {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
  
  .card-abilities ul {
    padding-left: 1rem;
  }
  </style>