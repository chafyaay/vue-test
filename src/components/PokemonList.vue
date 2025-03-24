
<template>
    <!-- Action Bar -->
    <div class="action-bar row">
      <div>
        <SortBy v-model="sortByValue" />
      </div>
      <div>
        <Pagination v-model="cardsPerPage" />
      </div>
    </div>
  
    <div class="container">
      <Navigation @set-page-index="handlePageIndexChange" />
      <div class="cards-content">
        <PokemonCard v-for="pokemon in paginatedPokemonList" :key="pokemon.name" :pokemon="pokemon" />
      </div>
      <Navigation @set-page-index="handlePageIndexChange" />
    </div>
  </template>
  
  <script setup>
  import { defineProps, ref, computed, watch } from 'vue';
  
  import PokemonCard from './PokemonCard.vue';
  import SortBy from './SortBy.vue';
  import Pagination from './Pagination.vue';
  import Navigation from './Navigation.vue';
  
  const { pokemons } = defineProps({
    pokemons: {
      type: Array,
      required: true,
    },
  });
  
  // Reactive state
  const sortByValue = ref('');
  const cardsPerPage = ref(10);
  const pageIndex = ref(0);
  const searchQuery = ref('');
  
  // Emit events
  const emit = defineEmits(['nbr-cards-per-page', 'page-index', 'search-query-event']);
  
  // Sorting logic (watch sortByValue)
  const sortedPokemonList = computed(() => {
    if (!sortByValue.value || sortByValue.value === 'name') {
      return [...pokemons].sort((a, b) => a.name.localeCompare(b.name));
    }
    return [...pokemons].sort((a, b) => a[sortByValue.value] - b[sortByValue.value]);
  });
  
  // Pagination logic (slice based on cardsPerPage and pageIndex)
  const paginatedPokemonList = computed(() => {
    const startIndex = pageIndex.value * cardsPerPage.value;
    const endIndex = startIndex + cardsPerPage.value;
    return sortedPokemonList.value.slice(startIndex, endIndex);
  });
  
  // Watch cardsPerPage and emit changes to parent
  watch(cardsPerPage, (newCardsPerPage) => {
    emit('nbr-cards-per-page', newCardsPerPage);
  });
  
  // Emit page index changes
  function handlePageIndexChange(event) {
    emit('page-index', event);
  }
  
  // Handle search query event (for parent communication)
  function handleSearchQueryEvent(event) {
    emit('search-query-event', event);
  }
  </script>
  
  <style scoped>
  .action-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  
  .cards-content {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  
  .container {
    margin-top: 1rem;
  }
  </style>
