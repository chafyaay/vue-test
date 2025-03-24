
<template>
  <select v-model="sortByValue" class="select-dropdown">
    <option value="" disabled>Sort by</option>
    <option v-for="option in sortOptions" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script setup>
import { ref } from 'vue';

// Define sorting options 
const sortOptions = [
  { value: 'name', label: 'Name' },
  { value: 'height', label: 'Height' },
  { value: 'weight', label: 'Weight' },
];

// Reactive state for selected sort value
const sortByValue = ref('');
</script>

<style scoped>
.select-dropdown {
  height: 2rem;
  border: 1px solid #CCC;
  border-radius: 0.3rem;
  width: 7rem;
  color: #333;
  padding: 0 0.5rem;
}
</style>