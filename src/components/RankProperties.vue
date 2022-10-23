<template>
  <div class="item-container">
    <div v-for="item, i in items" :key="i"
    :class="['item-rank', item  == 1 ? 'dark' : 'ligth']"
    ></div>
  </div>
</template>
<script lang="ts" setup>
import {  onMounted, ref } from 'vue';


const items = ref([0, 0, 0, 0, 0])

  const {num} = defineProps({
    num: {
      type: Number,
      required: false
    }
  })

onMounted( () => {
  items.value = items.value.map((x, i) =>  i+1 <= num! ? 1: 0)
})


</script>

<style scoped>

  .item-rank{
    width: 60px;
    height: 12px;


    border-radius: 8px;
 
  }

  .dark{
    background: #544439;
  }
  .ligth{
    background: #E0E0E0;
  }

  .item-container{
    display: flex;
    gap: 9px;
  }

</style>
