 <template>
<span> Show </span>
<select v-model="nbrCardsPerPage" @change="changeHandler">
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="50">50</option>
</select>
<span> elements / Page </span>
</template>

<script setup>
  import { defineModel } from 'vue';
  const nbrCardsPerPage=defineModel()
</script>

<style scoped>
    select{
        height: 2rem;
        border: 1px solid #CCC;
        border-radius: .3rem;
        width: 3rem;
        color:  #333;
    }
    span{
      font-size: .81rem;
    }
</style> 