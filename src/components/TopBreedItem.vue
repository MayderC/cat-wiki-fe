<template>
  <div class="container__top">
    <div class="img">
      <img :src="breed.image_url" alt="" />
    </div>
    <div class="info">
      <h2>{{ position + 1 + ". " + breed.name }}</h2>
      <p>{{ breed.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IBreedTop } from "@/interfaces/breedTop";
import type { PropType } from "vue";

const { breed, position } = defineProps({
  breed: {
    type: Object as PropType<IBreedTop>,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
});
</script>
<style scoped>
.container__top {
  display: flex;
  align-items: center;
  gap: 46px;
}

.img img {
  display: block;
  width: 170px;
  height: 170px;
  object-fit: cover;
  object-position: right top;
  border-radius: 24px;
}

.info h2 {
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height */

  color: #291507;
}

.info p {
  margin-top: 24px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #291507;
}
</style>
