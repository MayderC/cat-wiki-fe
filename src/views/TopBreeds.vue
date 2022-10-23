<template>
  <section class="top">
    <h1 class="title">Top 10 most searched breeeds</h1>
    <div class="top-body">
      <TopBreedItem
        class="top-item"
        v-for="(breed, i) in breeds"
        :key="breed._id"
        :breed="breed"
        :position="i"
      ></TopBreedItem>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { IBreedTop } from "@/interfaces/breedTop";
import { getTopSearchedBreeds } from "@/services/catwiki.services";
import { onMounted, ref } from "vue";

import TopBreedItem from "../components/TopBreedItem.vue";

const breeds = ref<IBreedTop[]>([]);

onMounted(() => {
  getTopSearchedBreeds(10).then((res) => (breeds.value = res));
});
</script>

<style scoped>
.title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height */

  color: #291507;
}
.top {
  margin-bottom: 60px;
  min-height: calc(100vh - 258px);
}
.top-item {
  margin-top: 55px;
}
</style>
