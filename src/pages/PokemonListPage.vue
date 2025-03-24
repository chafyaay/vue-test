
<template>
  <Loading v-show="isLoading" />
  <div v-show="!isLoading" class="container">
    <PokemonList
      :pokemons="pokemons"
      @nbr-cards-per-page="updateItemsPerPage"
      @page-index="updatePageIndex"
      @search-query-event="setSearchQuery"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch,onUnmounted } from 'vue';
import PokemonList from "../components/PokemonList.vue";
import Loading from "../components/Loading.vue";
import { fetchPokemonList, searchPokemonApi } from "../services/api";

/* Reactive States */
const pokemons = ref([]);
const isLoading = ref(false);
const error = ref('');
const itemsPerPage = ref(10);
const pageIndex = ref(0);

/* Search Criteria */
const searchCriteria = reactive({
  searchBy: '',
  searchQuery: '',
});


/* Function to Fetch Pokémon Data */
const fetchPokemonsData = async (limit, offset = 0) => {
  try {
    isLoading.value = true;
    const response = await fetchPokemonList(limit, offset);
   setTimeout(() => {
    pokemons.value = response;
   }, 1200);
 
  } catch (err) {
    error.value = err.message || 'An error occurred while fetching Pokémon data.';
  } finally {
    isLoading.value = false;
  }
};

/* Event Handlers */
const updateItemsPerPage = (value) => {
  itemsPerPage.value = value;
};

/* Fetch Pokémon Data on Mount */
onMounted(() => {
 fetchPokemonsData(itemsPerPage.value, 0);
});




const updatePageIndex = (value) => {
  if (value === -1 && pageIndex.value <= 0) return; // Prevent negative page index
  pageIndex.value += value;
};

/* Watchers */
/* watch(pageIndex,(newPageIndex)=>{
  console.log(1);
  
  fetchPokemonsData(itemsPerPage, newPageIndex)
}) */

watch(itemsPerPage,(newItemsPerPage)=>{
  console.log(2);

  fetchPokemonsData(newItemsPerPage, pageIndex)
})



</script>

<style scoped>
.container {
  padding-top: 1rem;
}
</style>


<!-- <template>
  <Loading v-if="isLoading"  />
  <div class="container">
    <PokemonList v-if="!isLoading" :pokemons="pokemons"
        @nbr-cards-per-page="getNbrcardsPerPage"
        @page-index="setPageIndex"
        @search-query-event="setSearchQuery"
    />
  </div>

</template>

<script setup>
import { ref,reactive,onMounted,onBeforeMount,watch,onUpdated } from 'vue'
import PokemonList from "../components/PokemonList.vue"
import Loading from "../components/Loading.vue"

import { fetchPokemonList,searchPokemonApi } from "../services/api";
/* reactive states */
const pokemons=ref([])
const isLoading=ref(false)
const error=ref('')
const itemsPerPage=ref(10)
const pageIndex=ref(0)
const p=ref(0)
const searchCriteria=reactive({
  searchBy: "",
  searchQuery: ""})

onMounted(() => {
  fetchPokemonsData(itemsPerPage.value)
})

 const fetchPokemonsData = async (limit,offset) => {
  try {
    isLoading.value=true
    const response=await fetchPokemonList(limit,offset)
    pokemons.value=response 
    isLoading.value=false
  } catch (error) {    
    error.value=error
  }
} 

const getNbrcardsPerPage=(value)=>{
    itemsPerPage.value=value
}

const setPageIndex=(value)=>{
  if(value===-1 && pageIndex.value<=0) return
  pageIndex.value+=value
}

watch([pageIndex,itemsPerPage],([NewpageIndex,newItemsPerPage])=>{
    fetchPokemonsData(newItemsPerPage,NewpageIndex)
})

</script>

<style scoped>
.container{
  padding-top: 1rem;
}
</style> -->