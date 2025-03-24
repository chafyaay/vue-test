
<template>
  <div class="container">
    <header class="header row">
      <router-link to="/">
         <img :src="imageICon" alt="Pokémon Image" class="logo" />
      </router-link>
      <!-- search bar component -->
      <Searchbar @search-query-event="searchQueryEvent"/>
    </header>
    <!-- route outlet -->
    <router-view />
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import imageICon from "../assets/logo.png"
import Searchbar from "../components/Searchbar.vue"

const router = useRouter();

  const searchQueryEvent=(event)=>{  
    router.push({ name: 'search-page',query:{...event} }); 
  }

</script>



<!-- styles -->
<style scoped>
.container{
max-width: 60rem;
margin: auto;
}
  .header{
    background-color:#f7f7f7 ;
    align-items: center;
    column-gap: 1rem;
    padding: 1rem;
  }
  .logo{
    height: 3rem;
  }
</style>