<template>
    <div class="container row">
      <input 
        class="form-control" 
        v-model="searchQuery"  
        placeholder="Search for a Pokémon..." 
      />
  
      <div class="dropdown-container">
        <input 
          v-model="searchBy" 
          class="search-by-input" 
          placeholder="Search by" 
          @focus="isFocused = true" 
        />
        <ul class="dropdown" v-show="isFocused">
          <li v-for="option in searchOptions" :key="option" @click="selectEvent(option)">
            {{ option }}
          </li>
        </ul>
      </div>
  
      <button class="btn" @click="onSearchSubmit">Search</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Reactive state
  const searchQuery = ref('');
  const searchBy = ref('');
  const isFocused = ref(false);
  
  // Options for the dropdown 
  const searchOptions = ['Pokemon', 'Ability'];
  
  // Emit event to the parent
  const emit = defineEmits(['search-query-event']);
  
  function onSearchSubmit() {
    console.log({searchBy: searchBy.value.toLowerCase(), searchQuery: searchQuery.value});
    
    emit('search-query-event', { searchBy: searchBy.value.toLowerCase(), searchQuery: searchQuery.value });
  }
  
  function selectEvent(value) {
    isFocused.value = false;  // Hide dropdown after selecting
    searchBy.value = value;   // Update searchBy value
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  
  .form-control {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    width: 200px;
  }
  
  .dropdown-container {
    position: relative;
  }
  
  .search-by-input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    width: 150px;
  }
  
  .dropdown {
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    margin-top: 0.5rem;
    width: 100%;
    padding: .5rem;
  }
  
  .dropdown li {
    padding: 0.5rem;
    cursor: pointer;
    list-style: none;
    padding:0.5rem 0;
  }
  
  .dropdown li:hover {
    background-color: #f0f0f0;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 0.3rem;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>