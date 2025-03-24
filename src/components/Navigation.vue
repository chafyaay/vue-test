
<template>
    <div class="navigation">
      <button class="btn" @click="changePage(-1)">Previous</button>
      <button class="btn" @click="changePage(1)">Next</button>
    </div>
  </template>
  
  <script setup>
  import { defineEmits } from 'vue';
  
  // Emit event for parent communication
  const emit = defineEmits(['set-page-index']);
  
  // Emit page change value (-1 for previous, +1 for next)
  function changePage(value) {
    emit('set-page-index', value);
  }
  </script>
  
  <style scoped>
.navigation{
    display: flex;
    column-gap: 1rem;
    padding: 1rem;
    width: 100%;
    justify-content: flex-end;
}

  
  .btn {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    background-color: #f5f5f5;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #e0e0e0;
  }
  </style>

