
<template>
  <div>
    <div @click="navigateToDetails" class="card">
      <img 
        :src="pokemon?.sprites?.other['official-artwork'].front_default" 
        alt="Pokémon Image" 
        class="card-image" 
      />
      <div class="card-body">
        <h3 class="card-title">{{ pokemon?.name }}</h3>
        <p class="card-text"><strong>Height:</strong> {{ pokemon?.height }} m</p>
        <p class="card-text"><strong>Weight:</strong> {{ pokemon?.weight }} kg</p>
        <div class="card-abilities">
          <strong>Abilities:</strong>
          <ul>
            <li 
              v-for="(ability, index) in pokemon?.abilities" 
              :key="ability.ability.name" 
              v-show="ability.is_hidden"
            >
              {{ ability?.ability?.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Define props with validation
const { pokemon } = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});

// Navigation function to Pokémon details
function navigateToDetails() {
  router.push(`/pokemon-details/${pokemon.name}`);
}
</script>

<style scoped>
.card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  max-width: 15rem;
}
@media screen and (max-width:600px) {
  .card {
    width: 100%;
    max-width: 100%;
  }
}

.card-image {
  width: 100%;
  height: auto;
}

.card-body {
  padding: 1rem;
}

.card-title {
  margin: 0.5rem 0;
  font-size: 1.5rem;
  text-transform: capitalize;
}

.card-text {
  margin: 0.25rem 0;
}

.card-abilities ul {
  list-style-type: none;
  padding: 0;
}
</style>
